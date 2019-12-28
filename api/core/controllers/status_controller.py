from app import app

from flask import jsonify


@app.route('/')
def status():
    return jsonify({
        "service": "whatsmyhood",
        "status": "ok",
    })
