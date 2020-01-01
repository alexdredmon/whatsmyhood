from app import app

from flask import jsonify


@app.route('/')
def root():
    return jsonify({
        "service": "whatsmyhood",
        "status": "ok",
    })


@app.route('/status')
def status():
    return jsonify({
        "service": "whatsmyhood",
        "status": "ok",
    })
