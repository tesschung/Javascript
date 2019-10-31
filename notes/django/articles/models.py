from django.db import models
from django.conf import settings


class Article(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    liked_users = models.ManyToManyField( # article.liked_users.all() => 아티클을 좋아하는 모든 유저
        settings.AUTH_USER_MODEL, 
        related_name='liked_articles', # user.liked_articles.all() => 유저가 좋아하는 모든 아티클
    )

    class Meta:
        ordering = ('-pk', )


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='comments', on_delete=models.CASCADE)
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-pk', )
