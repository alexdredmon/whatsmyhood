import os
import pika

def connect():
    credentials = pika.PlainCredentials(
        os.environ["RABBIT_USER"],
        os.environ["RABBIT_PASS"],
    )
    return pika.BlockingConnection(
        pika.ConnectionParameters(
            host=os.environ["RABBIT_HOST"],
            credentials=credentials,
        )
    )
