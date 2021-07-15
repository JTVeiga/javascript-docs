# Docker Node.JS

## Pull, Build and Run

docker pull node
docker build -t hvitoi/node .
docker run --name meu_node --rm -it hvitoi/node

## Execute

docker exec -it meu_node /bin/bash

## Stop, Remove, Remove Image

docker stop meu_node
docker rm meu_node
docker rmi hvitoi/node
