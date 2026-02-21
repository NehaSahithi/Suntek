import exp from 'express'
import {authenticate, register} from '../Services/authService.js'
import { ArticleModel } from '../models/articleModel.js';
import {verifyToken} from '../middlewares/verifyToken.js'
export const userRoute =exp.Router()
//create or register user
userRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj  = req.body;
    //call register
    const newUserObj = await register({...userObj,role:"USER"});
    //response
    res.status(201).json({message:"user created",payload:newUserObj});
})

//read all articles
userRoute.get("/users",async(req,res)=>{
    let articles = await ArticleModel.find()
    res.status(200).json({message:"articles",payload:articles})
})

//add comment to the article
userRoute.put('/users/comment', verifyToken, async(req, res)=>{
  try{
    // Accept either `articleId` or `id` from clients
    let {articleId, id, comment} = req.body
    const targetArticleId = articleId || id

    // Ensure authenticated user is available
    if(!req.user || !req.user._id) return res.status(401).json({message: "Authentication required"})
    let userId = req.user._id

    if(!targetArticleId) return res.status(400).json({message: "articleId is required"})

    // Find article and add comment
    let updatedArticle = await ArticleModel.findByIdAndUpdate(
      targetArticleId,
      { $push: { comments: { user: userId, comment: comment } } },
      { new: true }
    )

    // Check if article exists
    if(!updatedArticle){
      return res.status(404).json({message: "Article not found", payload: null})
    }

    res.status(200).json({message: "Comment added successfully", payload: updatedArticle})
  }catch(err){
    res.status(500).json({message: "Error adding comment", error: err.message})
  }
})