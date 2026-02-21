import jwt from "jsonwebtoken";//for encrypting token --can be reversed
import bcrypt from "bcrypt" //for hashing password---cannot be reversed
import { UserTypeModel } from "../models/userModel.js";
import {config} from "dotenv"
config()
//register function
export const register = async(userObj)=>{
    //create document
    const userDoc = new UserTypeModel(userObj);
    //validate for empty passwords
    userDoc.validate();
    //hash and replace plain password
    userDoc.password = await bcrypt.hash(userDoc.password,10);
    //save 
    const created = await userDoc.save();
    //convert doc to obj to remove password
    const newUserObj  = created.toObject(); //converts mogoDb document to java script obj 
    //remove password
    delete newUserObj.password;
    //return user obj without password
    return newUserObj;

};

//authenticate  function or login finction
export const authenticate =  async ({email,password})=>{
//check user with email and password
const user = await UserTypeModel.findOne({email});
if(!user){
    const err = new Error("invalid email ");
    err.status = 401;
    throw err; // no return method is requried as throw directly comes out if not executed
}

//compare passwords
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
    const err = new Error("return password");
    err.status = 401;
    throw err;

}
//check isactive state
 if(user.isActive===false){
    const err = new Error("your account blocked .Please contact admin");
    err.status =403;
    throw err;
 }
    
//generate token
const token = jwt.sign({userId:user._id,
    role:user.role,email:user.email
},process.env.JWT_SECRET,{
    expiresIn:'1h'
})
const userObj = user.toObject()
  delete userObj.password
  return {token, user: userObj}
};

