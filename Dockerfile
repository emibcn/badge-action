FROM node:14

USER root

RUN \
  apt-get update && \
  apt-get install python3 gcc

USER node
