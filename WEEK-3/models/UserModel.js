import {Schema,model} from 'mongoose'
//create  userschema (username,password,age)
const userSchema = new Schema({
    username:{
        type:String,
        required:[true, 'Username is required'],
        minLength:[4,'Minimum length is 4 characters'],
        maxLength:[100,'Maximum length is 100 characters']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    age:{
        type:Number,
        required:[true,'Age is required'],
        min:[18,'Minimum age is 18'],
        max:[25,'Maximum age is 25']
    }
},{
    strict:"throw",
});
//create User Model with Schema
export const UserModel = model('user', userSchema)