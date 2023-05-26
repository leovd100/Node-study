//const { Person } = require("./first module/person");
//const person = new Person("Leonardo");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();

//path File
//require("./modules/path/path");
//console.log(person.sayMyName());

//require("./modules/fs/fs");
//require("./modules/http/http");
require("./modules/express/express");
