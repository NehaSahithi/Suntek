import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import jwt from 'jsonwebtoken';
import {hash,compare} from 'bcryptjs'
'
export const userApp = exp.Router()

// user API routes

//create User
userApp.post('/users',async(req,res)=>{
   try{
    let newUser=req.body;
    //hash password
    let hashedpassowrd = await hash(newUser.password, "12");
    // replace plain password with hashed password
    newUser.password = hashedpassowrd;
    //create new user document
    let newUserDoc = new UserModel(newUser)
    console.log(newUserDoc)
    //save to DB
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"User created successfully"})}
    catch(err){
        res.status(400).json({message:"Error in creating user", error: err.message})
    }
})
//read user
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let users= await UserModel.find()
    //send res
    res.status(200).json({message:"successful", users: users})
    
});
// Read user by objectId
userApp.get('/users/:id', async (req, res) => {
        //get objId from req params
        let objId = req.params.id;
        //read user from DB
        let userObj = await UserModel.findById(objId);
        //send res
        res.status(200).json({ message: "User found", payload: userObj });
            
    });
//Update users 
userApp.put('/users/:id', async (req, res) => {
    //get objId from req params
    let objId = req.params.id;
    //get modified user data from req body
    let modifiedUser = req.body;
    //make update in DB
    let latestUser = await UserModel.findByIdAndUpdate(objId,{ $set: {...modifiedUser}},{ new: true ,runValidators:true});
    //send res
    res.status(200).json({ message: "User modified successfully", payload: latestUser });
});
//Delete Users
userApp.delete('/users/:id', async (req, res) => {
    //get objId from req params
    let objId = req.params.id;
    //delete user from DB
    let deletedUser = await UserModel.findByIdAndDelete(objId);
    //send res
    res.status(200).json({ message: "User deleted successfully", payload: deletedUser });
});
// User authentication (login) route
userApp.post('/users/auth', async (req, res) => {
    //get user cred obj
    let userCred = req.body;
    //check for username
    let userofDB = await UserModel.findOne({username:userCred.username});
    //if user not found
    if(userofDB==null){
        return res.status(404).json({message:"Invalid username"})
    }
    //compare passwords
    let status = await compare(userCred.password, userofDB.password)
    // if password not matched
    if (status == false) {
        return res.status(404).json({ message: "Invalid password" })
    }
    // create signed token
// Removed 'abcdef' and changed expiry to 1 hour
let signedToken = jwt.sign(
    { username: userCred.username }, 
    "secret", 
    { expiresIn: '1h' }
);    res.cookie('token', signedToken, { 
        httpOnly: true,// not accessible via js, it is http only cookie
        secure: false,
        sameSite: 'lax',

     });
    // send token in res
    res.status(200).json({message:"login success", token: signedToken});
    
    //
})
//test route
userApp.get('/test', (req, res) => {
    res.json({ message: "User API is working" })
});
