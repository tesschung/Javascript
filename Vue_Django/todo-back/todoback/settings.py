"""
Django settings for todoback project.

Generated by 'django-admin startproject' using Django 2.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import datetime

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '2t2%$p1f$oqwf_8pn8zfc8-qr%325p4p)kpu@!5k!^!arim426'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition


INSTALLED_APPS = [
    # local apps
    'todos',

    # third party apps
    'rest_framework',
    'corsheaders',

    # django apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# https://dev-yakuza.github.io/ko/django/jwt/
# view함수로 들어가기 전 인증 및 로그인 여부를 확인해주는 세팅
REST_FRAMEWORK = {
    # 로그인 여부를 확인해주는 클래스
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    # 인증여부를 확인해주는 클래스
   'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}

# https://dev-yakuza.github.io/ko/django/jwt/
# JWT_SECRET_KEY: JWT의 비밀키(Secret Key)로 어떤걸 사용할지 작성합니다. 여기에서는 장고(django)와 같은 비밀키를 사용하였지만 사용할 때는 다른 키를 사용하시길 권장합니다.
# JWT_ALGORITHM: JWT 암호화에 사용되는 알고리즘을 지정합니다.
# JWT_ALLOW_REFRESH: JWT 토큰을 갱신할 수 있게 할지 여부를 결정합니다.
# JWT_EXPIRATION_DELTA: JWT 토큰의 유효 기간을 설정합니다.
# JWT_REFRESH_EXPIRATION_DELTA: JWT 토큰 갱신의 유효기간 입니다.

JWT_AUTH = {
    # 토큰을 서명할 시크릿 키를 등록 (절대 외부 노출 금지), default가 settings.SECRET_KEY
    'JWT_SECRET_KEY': SECRET_KEY,
    'JWT_ALGORITHM': 'HS256',

    # 발급한 토큰을 최신화하여 새로 발급시키기 위해서 True
    'JWT_ALLOW_REFRESH': True,

    # default 유효기간은 5분이고, 아래와 같이 7일간 유효하도록 설정 가능
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7),

    # 28일 마다 토큰이 갱신(유효기간 연장시)
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=28),
}


MIDDLEWARE = [
    # https://github.com/adamchainz/django-cors-headers
    # corsheaders
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# https://github.com/adamchainz/django-cors-headers
# # 요청을 보내는 사이트를 접근할 수 있도록 허용하는 곳
# CORS_ORIGIN_WHITELIST = [
#     # 우리의 vue server
#     "http://localhost:8080",
# ]

# OPEN API 를 만들때 사용
# 모든 사이트에서 보내는 요청 허용
CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'todoback.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'todoback.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'

# 앞으로 todos에 정의한 User모델을 기본 User모델로 사용
AUTH_USER_MODEL = 'todos.user'
