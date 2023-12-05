FROM node:18-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM base AS back-build
COPY ./ ./
RUN npm ci
RUN npm run build

FROM base AS release
COPY --from=back-build /usr/app/dist ./
COPY ./package.json ./
RUN apk update && apk add jq
RUN updatedImports="$(jq '.imports[]|=sub("./src"; ".")' ./package.json)" && echo "${updatedImports}" > ./package.json
COPY ./package-lock.json ./
RUN npm ci --only=production

ENV STATIC_FILES_PATH=./public
ENV API_MOCK=true
ENV AUTH_SECRET=MY_AUTH_SECRET

CMD node index