import os
import requests

from core.models.location import Location


def find_neighborhood(latitude, longitude):
    location = ingest_neighborhood(
        latitude=latitude,
        longitude=longitude,
    )
    if not location.neighborhoods:
        location = extract_neighborhoods(location)

    return location.neighborhoods


def ingest_neighborhood(latitude, longitude):
    key = os.environ["GOOGLE_MAPS_API_KEY"]
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={latitude},{longitude}&key={key}"
    response = requests.get(url).json()
    location = Location(
        latitude=latitude,
        longitude=longitude,
        response=response,
    )
    return location


def extract_neighborhoods(location):
    results = location.response.get("results")
    neighborhoods = []
    for address in results:
        address_neighborhoods = [
            component.get("long_name")
            for component
            in address.get("address_components", [])
            if "neighborhood" in component.get("types")
        ]
        for neighborhood in address_neighborhoods:
            if neighborhood not in neighborhoods:
                neighborhoods.append(neighborhood)
    location.neighborhoods = neighborhoods
    return location
