UID_GID=$(shell id -u):$(shell id -g)

start:
	docker-compose run --rm --user=$(UID_GID) web bash