import os
import six
from google.cloud import storage


def _get_storage_client():
    return storage.Client(
        project=os.environ['GCP_PROJECT_ID']
    )

def upload_file(
    file_stream,
    filename,
    content_type,
):
    """
    Uploads a file to a given Cloud Storage bucket and returns the public url
    to the new object.
    """

    client = _get_storage_client()
    bucket = client.bucket(os.environ['GCP_STORAGE_BUCKET'])
    blob = bucket.blob(filename)

    blob.upload_from_string(
        file_stream,
        content_type=content_type)

    url = blob.public_url

    if isinstance(url, six.binary_type):
        url = url.decode('utf-8')

    return url
