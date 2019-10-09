const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const app = require("./lib/app");
const log = require("./lib/logger")();

const {
  INITDB_DATABASE = "schoolsdb",
  DATABASE_HOST = "localhost",
  DATABASE_PORT = 5984,
  PORT = 3000
} = process.env;

const url = `http://${DATABASE_HOST}:${DATABASE_PORT}/${INITDB_DATABASE}`;

process.on("uncaughtException", err => {
  log.error({ err }, "Got an uncaught exception");
  process.exit(1);
});

process.on("unhandledRejection", err => {
  log.error({ err }, "Got an unhandled rejection");
  process.exit(1);
});

const db = new PouchDB(url);
app(db).listen(PORT, () => log.info(`App listening on port ${PORT}!`));


