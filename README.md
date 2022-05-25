# DEMO API

## System Dependencies

The following are needed by this project:

* [Node v16.13.1](https://nodejs.org/en/)
* [NPM v8.3.1](https://www.npmjs.com/get-npm)


## Running on local

### Clone this repository and bundle

```
git clone https://gitlab.com/agilelab/exceltec/exceltec-database-nodejs.git
cd demo2
npm install
```

### Database

- Add env/dev.env
- Create database `demo2_dev` (mysql), or run `npx sequelize-cli db:create`
- Migration `npx sequelize-cli db:migrate`
- Seed `npx sequelize-cli db:seed:all`

### Run app

- `npm start`
- `DEBUG=demo2:* npm run start` use nodemon for auto restart app when got change

### Sequelize

- Generate migration `npx sequelize-cli migration:generate --name ${migration_name}`
- Migration `npx sequelize-cli db:migrate`
- Revert most recent migration `npx sequelize-cli db:migrate:undo`
- Generate seed: `npx sequelize-cli seed:generate --name ${file_name}`
- Running seed: `npx sequelize-cli db:seed --seed ${file_name}`
- Running All Seeds: `npx sequelize-cli db:seed:all`
- Undoing Seeds: most recent seed `npx sequelize-cli db:seed:undo`, undo all seeds `npx sequelize-cli db:seed:undo:all`
