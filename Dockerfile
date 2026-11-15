FROM node:20-alpine3.20

LABEL name="wiki-ci" \
      version="2.2.0" \
      description="Docker image for deploying the Docs" \
      maintainer="Ture Bentzin <ture.bentzin@alumni.fh-aachen.de>"

WORKDIR /app

RUN apk add --no-cache git curl
RUN apk add --no-cache git-lfs && git lfs install

RUN yarn global add prettier
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

CMD ["sh"]
