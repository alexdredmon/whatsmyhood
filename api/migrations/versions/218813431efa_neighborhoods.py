"""neighborhoods

Revision ID: 218813431efa
Revises: 5524846f4d49
Create Date: 2019-12-28 03:56:50.582672

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '218813431efa'
down_revision = '5524846f4d49'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('location', sa.Column('neighborhoods', postgresql.JSON(astext_type=sa.Text()), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('location', 'neighborhoods')
    # ### end Alembic commands ###
