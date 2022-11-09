## Description

Administrative application for managing the Empower Global customer website.  

## Configuration

The following environmental variables will need to be defined in a .env file, or within the container environment.  All referenced directories will need to be created before uploading images or exporting configuration.

```properties
# Name of the database
DB_DATABASE=eg_admin
# Hostname of the database
DB_HOST=localhost
# Port of the database
DB_PORT=5432
# Database connection username
DB_USER=eg_admin_user
# Database connection password
DB_PASSWORD=eg_admin_pass
# If true, database tables are modified by typeorm as needed during startup.  Should be false in production 
DB_SYNC=false

# Port on which the application will service requests
PORT=3040

# Directory into which JSON configuration files are exported. 
CONFIG_EXPORT_DIR=/path/to/config
# Directory into which uploaded images are saved
IMAGE_UPLOAD_DIR=/path/to/images
```

## Installation

```bash
$ npm install
```

## Running the app

For local development, set the DB_SYNC variable from .env to true.  On startup of the application, the database tables will be automatically created and/or modified as needed.  

All RESTful web services (besides login) require authorization.  The first user needs to be inserted manually into the "user" table.  Subsequent users can be created using the POST /user service.

Postman collection and environment for testing in the postman/ subdirectory.  Use the Auth | Login service to retrieve and set the JWT.  Remember to edit the Postman environment for the username/password inserted manually into the 'user' table.


```bash
# development, if nest cli is installed
$ nest start 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger

To view and test the API, use swagger at /api

## API

POST /auth/login
{
  username: string,
  password: string
}

GET /explore-category

POST /explore-category
{
  category: string,
  imageId: number
}

POST /image/upload
multipart/form-data
