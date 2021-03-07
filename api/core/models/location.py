
class Location:
	def __init__(
		self, 
		latitude=None,
		longitude=None,
		neighborhoods=None,
		response=None
	):
		self.latitude = latitude
		self.longitude = longitude
		self.neighborhoods = neighborhoods
		self.response = response
