const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const passport = require("passport")


const users = require("./Routes/users");

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(passport.initialize())

// passport conig 
require("./MiddleWare/passport")(passport)

//DB config
const db = require("./Config/keys").mongoURI;
//

// connect to database
mongoose
  .connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("The database is connected!"))
  .catch((err) => console.error(err));

  // Use Routes
  app.use('/', users);

//verify token function 
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

//connect to server



const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is running on port ${port}` ))

