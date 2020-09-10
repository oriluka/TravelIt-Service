# Project Name

> Back End project trying to scale up an inherited legacy codebase to hold 10 mil unique records and handle real user traffic while being as cheap as possible (Deployed as a server and database each as separate AWS t2 microsto allow for further horizontal scaling).  

## Related Projects

  - https://github.com/SDC-Team-Zelda/nick-service
  - https://github.com/SDC-Team-Zelda/riley-service
  - https://github.com/SDC-Team-Zelda/justin-service


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

### CRUD Api Info

  #### get calls:
  *'/app'* : responds with static files to render module
  *'/host'* : responds with host based on query request
  *'/area'* : reponds with area based on query request
  *'/zip'* : responds with a zipcode

  #### post calls:
  *'/host'* : creates a new host based on query data

  #### put calls:
  *'/host'* : updates host info based on query data

  #### delete calls:
  *'/host'* : deletes specific host record based on query request

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

