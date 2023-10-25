import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

//Initiate our app
//create an instance of the Express.js application
const app = express();

//Middleware
//Auth
app.use(cors({
    credentials: true, //indicates that the server can include credentials (e.g., cookies, HTTP authentication) in CORS requests.
}));
app.use(compression()); //reduces the size of responses and improves the speed of transferring data over the network
app.use(cookieParser()); //parses cookies from incoming requests
app.use(bodyParser.json()); //used to parse incoming JSON payloads of HTTP POST requests. It extracts the JSON data from the request body and makes it accessible via req.body in your route handlers

//Create server & listener
const server = http.createServer(app);
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});

//DB
const MONGO_URL = 'mongodb+srv://ramsundar1238:QBp8CFZTdjjbaVLO@cluster0.ujgtfsg.mongodb.net/';
mongoose.Promise = Promise; //Promises are a programming pattern, handling asynchronous operations to avoid the "callback hell" problem.
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());