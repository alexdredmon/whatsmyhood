import json
import os
from .connection import connect


class RabbitProducer:
    connection = None

    def __init__(self):
        try:
            self.connect()
        except:
            self.connection = None

    def connect(self):
        self.connection = connect()
        self.channel = self.connection.channel()

    def send_message(
        self,
        message,
        queue=os.environ["RABBIT_QUEUE"],
        retry=True,
    ):
        if not self.connection:
            self.connect()
        try:
            self.channel.queue_declare(queue=queue)
            self.channel.basic_publish(
                exchange='',
                routing_key=queue,
                body=json.dumps(message),
            )
        except:
            print("Error publishing message:")
            print(message)
            if self.connection:
                self.connection.close()
            if retry:
                print("Retrying sending message...")
                self.connect()
                self.send_message(
                    message=message,
                    queue=queue,
                    retry=False,
                )
