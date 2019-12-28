import datetime
from sqlalchemy import (
    Column,
    DateTime,
    Index,
    Integer,
    String,
)
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.inspection import inspect

from core.lib.psql.database import db
from core.lib.psql.session import db_session
from core.lib.util.identifier import create_uuid
from core.lib.util.string import camel_to_snake_case


BaseModel = db.Model
BaseModel.query = db_session.query_property()
BaseModel.session = db_session

class BaseMixin:
    @declared_attr
    def __tablename__(cls):
        return camel_to_snake_case(cls.__name__)

    @declared_attr
    def __table_args__(cls):
        return (
            Index(
                f"uuid_idx_{cls.__tablename__}",
                'uuid',
            ),
        )

    uuid = Column(
        String(50),
        default=create_uuid,
        primary_key=True,
    )
    created = Column(
        DateTime(),
        default=datetime.datetime.utcnow,
    )

    def __repr__(self):
        return f"<{cls.__name__} {self.uuid}>"

    @classmethod
    def create(cls, *args, **kwargs):
        model = cls(*args,  **kwargs)
        cls.session.add(model)
        try:
            cls.session.commit()
            return model
        except:
            cls.session.rollback()
            return None

    @classmethod
    def filter(cls, **kwargs):
        query = cls.query
        for key, val in kwargs.items():
            query = query.filter(getattr(cls, key) == val)
        return query

    @classmethod
    def find(cls, **kwargs):
        return cls.filter(**kwargs).first()

    @classmethod
    def find_all(cls, **kwargs):
        return cls.filter(**kwargs).all()

    @classmethod
    def find_or_create(cls, **kwargs):
        entity = cls.find(**kwargs)
        if not entity:
            entity = cls.create(**kwargs)
        return entity

    def save(self):
        try:
            self.session.commit()
            return True
        except:
            self.session.rollback()
            return False

    def serialize(self):
        inspection = inspect(self.__class__)
        fields = [
            column.key
            for column
            in inspection.columns
        ]
        return {
            field: getattr(self, field)
            for field in fields
        }
    def view(self):
        return self.serialize()
