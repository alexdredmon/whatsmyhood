import os
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])

CORS(app)


# from lib.flask.logger_middleware import LoggerMiddleware

# LoggerMiddleware(app)

from core.controllers.neighborhood_controller import *
from core.controllers.status_controller import *

if __name__ == '__main__':
    app.run(host='0.0.0.0')
