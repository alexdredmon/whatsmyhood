from lib.psql.base_model import (
    BaseMixin,
    BaseModel,
)
from lib.psql.columns import (
    JsonColumn,
    StringColumn,
)


class Location(BaseModel, BaseMixin):
    latitude = StringColumn(length=50)
    longitude = StringColumn(length=50)
    neighborhoods = JsonColumn()
    response = JsonColumn()
