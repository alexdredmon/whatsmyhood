alembic_command = run api manage.py db
compose_file = -f ./docker-compose.yml


attach:
	@docker attach whatsmyhood-api

migrate:
	@docker-compose $(compose_file) ${alembic_command} migrate -m "$(name)"

upgrade:
	@docker-compose $(compose_file) ${alembic_command} upgrade
