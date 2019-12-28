import secrets
from werkzeug.security import check_password_hash, generate_password_hash


def check_hash(hash, str):
    return check_password_hash(hash, str)

def generate_hash(str):
    return generate_password_hash(str)

def generate_token(len=100):
    return secrets.token_hex(int(len/2))
