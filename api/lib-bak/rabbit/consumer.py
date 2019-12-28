import json
import os
from .connection import connect


class RabbitConsumer:
    connection = None

    def __init__(
        self,
        queue=os.environ["RABBIT_QUEUE"],
    ):
        self.connection = connect()
        channel = self.connection.channel()
        channel.queue_declare(
            queue=queue,
        )
        channel.basic_consume(
            self.callback,
            queue=queue,
            no_ack=True,
        )
        self.channel = channel

    def callback(
        self,
        ch,
        method,
        properties,
        body,
    ):
        message = json.loads(body)
        print(f"Handling message: {message}")
        
        self.handle_message(message)

    def handle_message(
        self,
        message,
    ):
        pass

    def run(
        self,
    ):
        print("Running...")
        if self.channel:
            self.channel.start_consuming()
            print(' [*] Waiting for messages. To exit press CTRL+C')
        else:
            print("No channel!  Can't consume.")
        