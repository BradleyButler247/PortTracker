"use strict";


require("dotenv").config();
require("colors"); 

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";
const PORT = process.env.PORT || 5432;
const SERVER_PORT = process.env.SERVER_PORT || 5000;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
    ? "postgres:///porttracker_test"
    : process.env.DATABASE_URL || "postgres:///porttracker";
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("PortTracker Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("SERVER_PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  SERVER_PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri
};
