import exp from'express'
import { authenticate } from '../Services/authService.js'
import bcrypt from 'bcrypt'
import { UserTypeModel } from '../models/userModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'
export const commonRouter = exp.Router()
//authenticate user
commonRouter.post('/authenticate',async(req,res)=>{
    //get user credential object
        let userCred = req.body;
        //call authenticate function
        let {token,user} = await authenticate(userCred)
        //save token as 
        res.cookie("token",token,{
            httpOnly:true,
            samesite:"lax",
            secure:false,
        });
        //send res
        res.status(200).json({message:"login success",payload:user,token})

})

//logout
//logout for User, Author and Admin
commonRouter.post('/logout', (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie('token', {
    httpOnly: true, // Must match original  settings
    secure: false,   // Must match original  settings
    sameSite: 'lax' // Must match original  settings
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
});

//password change 
commonRouter.put('/change-password', async(req, res)=>{
    // accept either `currentPass` or `currentPassword` (same for new)
    let { email } = req.body
    let currentPass = req.body.currentPassword
    let newPass = req.body.newPassword

    if(!email || !currentPass || !newPass){
      return res.status(400).json({message: "email, current password and new password are required"})
    }

    let user = await UserTypeModel.findOne({ email })
    if(!user){
      return res.status(404).json({message: "User not found"})
    }

    // check the current password is correct (compare plaintext -> stored hash)
    let isMatch = await bcrypt.compare(currentPass, user.password)
    if(!isMatch){
      return res.status(401).json({message: "Invalid current password"})
    }

    // hash the new password before saving
    let hashedNew = await bcrypt.hash(newPass, 10)
    let passwordChange = await UserTypeModel.findByIdAndUpdate(user.id, {
      $set: { password: hashedNew }
    }, { new: true })

    //send res
    res.status(200).json({ message: "Password updated", payload: passwordChange })
})