import mongoose from "mongoose";

//These functions provide operations to interact with user data stored in a MongoDB database.
// User Schema
const UserSchema = new mongoose.Schema({
    email: {type:String, required:true},
    username: {type:String, required:true},
    authentication: {
        password: {type:String, required:true, select:false},
        salt: {type:String, select:false},
        sessionToken: {type:String, select:false},
    },
});
// User Model
export const UserModel = mongoose.model('User', UserSchema); //Interaction with DB
// User Action
export const getUsers = () => UserModel.find(); //Retrive all users
export const getUserByEmail = (email:string) => UserModel.findOne({email}); //Retrive user by email
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
}); //Retrieves a user by their session token
export const getUserById = (id: string) => UserModel.findById(id); //Retrieves a user by their ID
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject()); //Creates a new user using the provided values and saves it to the database
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id:id}); //Deletes a user by their ID.
export const updateUserById = (id:string, values: Record<string, any>) => UserModel.findByIdAndUpdate({id, values}); //Updates a user by their ID with the provided values