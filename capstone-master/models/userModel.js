//This model is for all users i.e author,user,admin
import {Schema,model} from 'mongoose'
 const userSchema =new Schema({
    firstName:{
        type:String,
        required:[true,"First Name is requried"],
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"email is requried"],
        unique:[true,"Email already existed"]
    },
    password:{
        type:String,
        required:[true,"password is requried"],
    },
    profileImageUrl:{
        type:String,
    },
    role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],
        required:[true,"{value} is an invalid role"]
    },
    isActive:{
        type:Boolean,
        default:true,

    }

 },{
    timeStamps:true,
    strict:'throw',
    versionKey:false,
 });

 export const UserTypeModel = model("user",userSchema) //use upper camel Case for model names 