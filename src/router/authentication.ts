import express from 'express';

//define a route handler function that registers a route for user authentication using Express.js.
// This function is expected to handle the registration logic for user authentication.
import { login, register } from '../controllers/authentication';

export default (router: express.Router) => {
    router.post('/auth/register', register); //when a POST request is made to this path, the register function will be called.
    router.post('/auth/login', login);
};