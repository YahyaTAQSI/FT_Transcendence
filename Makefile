all : up

up : 
	@docker-compose up --build -d

down : 
	@docker-compose down
	@docker system prune -af

status : 
	@docker ps

re: down up
