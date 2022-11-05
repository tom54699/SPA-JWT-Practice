import os 
from dotenv import load_dotenv
from datetime import timedelta

load_dotenv()

class BaseConfig:
    SECRET_KEY = os.getenv("SECRET_KEY")
    JWT_TOKEN_LOCATION = ['headers','cookies']
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=1)
    JWT_COOKIE_SECURE = False  # 開true要有https
    JWT_COOKIE_CSRF_PROTECT = False