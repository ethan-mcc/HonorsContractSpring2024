### Assuming installation of Docker and docker-compose, and daemon running.

`npm install`

`docker-compose up -d`

### Manual start web server
`npm run start`

### Test
`npm run test`

### JSDOC
`npm run doc`

## View JSDOC documentation at /docs

## /app has express.js and mongoose ORM

## react ui is in /app/react

## react ui is then complied to static assets and delivered using express.js webserver

`cd /app`

`npm install`

`npm update`

`npx create-react-app react-movie-ui`

`cd react-movie-ui`

`npm install -D tailwindcss`

`npx tailwindcss init`

`follow steps 3-6 https://tailwindcss.com/docs/guides/create-react-app`

`npm install`

`npm run build`

`cd ..`

