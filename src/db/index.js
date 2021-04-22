import Chalk from "chalk";
import util from "util";
import mysql from "mysql";
import config from "../config";

class Database {
  connection = null;

  constructor() {
    this.dbConnect();
  }

  dbConnect() {
    this.connection = mysql.createConnection({
      host: config.database.dbHost,
      database: config.database.dbName,
      user: config.database.dbUser,
      password: config.database.dbPass,
      multipleStatements: true,
    });

    this.connection.connect((error) => {
      if (error) {
        console.log(error.stack);
        throw new Error(Chalk.red("Database connection error"));
      }
      console.log(Chalk.yellow("Database connection successful"));
    });
  }

  query(sql, args) {
    return util.promisify(connection.query).call(connection, sql, args);
  }

  beginTransaction() {
    return util.promisify(connection.beginTransaction).call(connection);
  }
  commit() {
    return util.promisify(connection.commit).call(connection);
  }
  rollback() {
    return util.promisify(connection.rollback).call(connection);
  }
  close() {
    return util.promisify(connection.end).call(connection);
  }
}

export default new Database();
