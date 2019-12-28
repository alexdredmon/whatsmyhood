from app import app

from flask import jsonify, request
from core.services import neighborhood_service


@app.route('/neighborhood')
def neighborhood():
    args = request.args
    latitude = args.get("latitude")
    longitude = args.get("longitude")
    neighborhood = neighborhood_service.find_neighborhood(
        latitude=latitude,
        longitude=longitude,
    )
    return jsonify({
        "neighborhoods": neighborhood,
    })
