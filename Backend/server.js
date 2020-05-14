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

app.use('./public', express.static('public'));

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
 
  app.use('/public', express.static('public'));

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
var http = require('http').createServer(app);
var io = require('socket.io')(http);


//connect to server
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
      console.log('message: ' + JSON.stringify(msg));
      io.emit('chat message', msg);
    });
});

http.listen(5001, () => {
  console.log('listening on *:5001');
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is running on port ${port}` ))

