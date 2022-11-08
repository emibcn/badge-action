ARG SLIM=-slim

FROM node:16$SLIM

USER root

RUN \
  apt-get update && \
  apt-get install -y python3 gcc && \
  apt-get clean

USER node
