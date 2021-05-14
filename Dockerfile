ARG SLIM=-slim

FROM node:14$SLIM

USER root

RUN \
  apt-get update && \
  apt-get install -y python3 gcc

USER node
