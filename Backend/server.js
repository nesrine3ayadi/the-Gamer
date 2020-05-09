const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

const users = require("./Routes/users");

const app = express();
app.use(bodyParser.json())
app.use(cors());

//DB config
const db = require("./Config/keys").mongoURI;

// connect to database
mongoose
  .connect(db)
  .then(() => console.log("The database is connected!"))
  .catch((err) => console.error(err));

  // Use Routes
  app.use('/', users);

  
//connect to server

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is running on port ${port}` ))