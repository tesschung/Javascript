from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST, require_GET
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.http import HttpResponse, JsonResponse
from .models import Article, Comment
from .forms import ArticleForm, CommentForm


@require_GET
def index(request):
    articles = Article.objects.all()
    context = {'articles': articles}
    return render(request, 'articles/index.html', context)


@require_GET
def detail(request, article_pk):
    # 사용자가 url 에 적어보낸 article_pk 를 통해 디테일 페이지를 보여준다.
    article = get_object_or_404(Article, pk=article_pk)
    comment_form = CommentForm()
    comments = article.comments.all()
    context = {
        'article': article,
        'comment_form': comment_form,
        'comments': comments,
    }
    return render(request, 'articles/detail.html', context)


@login_required
def create(request):
    if request.method == 'POST':
        # Article 을 생성해달라고 하는 요청
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save(commit=False)
            article.user = request.user
            article.save()
            return redirect('articles:detail', article.pk)
    else: # GET
        # Article 을 생성하기 위한 페이지를 달라고 하는 요청
        form = ArticleForm()
    context = {'form': form}
    return render(request, 'articles/create.html', context)


@login_required
def update(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    if article.user == request.user:
        if request.method == 'POST':
            form = ArticleForm(request.POST, instance=article)
            if form.is_valid():
                form.save()
                return redirect('articles:detail', article_pk)
        else: # GET method
            form = ArticleForm(instance=article)
    else:
        return redirect('articles:detail', article_pk)
    context = {'form': form}
    return render(request, 'articles/update.html', context)


@require_POST
def delete(request, article_pk):
    if request.user.is_authenticated:
        # article_pk 에 맞는 article 을 꺼낸다. 삭제한다.
        article = get_object_or_404(Article, pk=article_pk)
        if article.user == request.user:
            article.delete()
        else:
            return redirect('articles:detail', article_pk)
    return redirect('articles:index')


# 댓글을 생성하는 요청을 받는다.
@require_POST
def comments_create(request, article_pk):
    if request.user.is_authenticated:
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.article_id = article_pk
            comment.user = request.user
            comment.save()
    return redirect('articles:detail', article_pk)


@require_POST
def comments_delete(request, article_pk, comment_pk):
    if request.user.is_authenticated:
        comment = get_object_or_404(Comment, pk=comment_pk)
        if comment.user == request.user:
            comment.delete()
        return redirect('articles:detail', article_pk)
    return HttpResponse('You are Unauthorized', status=401)


def like(request, article_pk):
    user = request.user
    article = get_object_or_404(Article, pk=article_pk)

    # if article.liked_users.filter(pk=user.pk).exists(): # 1개의 데이터라도 존재하면 True
    if user in article.liked_users.all():
        user.liked_articles.remove(article)
        # Axios
        liked = False
    else:
        user.liked_articles.add(article)
        liked = True
    
    context = {
        'liked': liked, 
        'count': article.liked_users.count(),
        }

    return JsonResponse(context)


@login_required
def follow(request, article_pk, user_pk):
    # 로그인한 유저가 게시글 유저를 Follow or Unfollow 한다.
    user = request.user # 로그인 유저
    person = get_object_or_404(get_user_model(), pk=user_pk) # 게시글 주인

    if user in person.followers.all(): # 이미 팔로워임
        person.followers.remove(user) # 언팔하겠음
    else: # 팔로워가 아님
        person.followers.add(user) # 팔로우 하겠음
    
    return redirect('articles:detail', article_pk)
