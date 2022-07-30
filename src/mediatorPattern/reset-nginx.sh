#!/bin/bash

set -ex

npx tsc --module es2022 && \
docker container stop nginx-for-mediator-pattern && \
docker container rm nginx-for-mediator-pattern && \
docker image rm nginx-for-mediator-pattern && \
docker build -t nginx-for-mediator-pattern . && \
docker run --name nginx-for-mediator-pattern -d -p 8080:80 nginx-for-mediator-pattern
