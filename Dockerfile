# METHOD 1: Build entire app in docker
# stage: 1
# FROM node:10.16.3 as react-build
# WORKDIR /
# COPY . ./
# RUN npm install
# RUN npm run build

# stage: 2 — the production environment
# FROM nginx:alpine
# COPY --from=react-build /dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#METHOD 2: - Build locally & then build docker image --requires only 1 docker container, rather than 2
FROM nginx:alpine
COPY /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
