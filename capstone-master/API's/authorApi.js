import exp from 'express'
import {register, authenticate} from '../Services/authService.js'
import {ArticleModel} from '../models/articleModel.js'
import {UserTypeModel} from '../models/userModel.js'
import { checkAuthor } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/verifyToken.js'
export const authorRoute =exp.Router()
//Register author(public)
authorRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj  = req.body;
    //call register
    const newUserObj = await register({...userObj,role:"AUTHOR"});
    //response
    res.status(201).json({message:"author created",payload:newUserObj});
})
//create article (protected route)
authorRoute.post('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get articles from req
    let articleObj = req.body;
    
    //create article document
    const articleDoc = new ArticleModel(articleObj);
    //save
    const created = await articleDoc.save();
    //send response
    res.status(201).json({message:"article created",payload:created});
})
//read articles of the author(protected route)
authorRoute.get('/articles/:authorId',verifyToken,checkAuthor,async(req,res)=>{
    //get author id
    let aid = req.params.authorId;
    //read articles by this author
    const articles = await ArticleModel.find({author:aid,isArticleActive:true}).populate("author","firstName email");
    //send res
    res.status(200).json({message:"articles fetched",payload:articles})
})

//edit article
authorRoute.put("/articles",verifyToken, checkAuthor, async (req, res) => {
        //get modified article from req
        let {articleId,title,category,content,author} = req.body;
        //find article
        let articleOfDb = await ArticleModel.findOne({_id:articleId,author:author})
        if(!articleOfDb)
        {
            return res.status(401).json({message:"Article not found"})

        }
        //update the article(protected route)
        const updated = await ArticleModel.findByIdAndUpdate(articleId, { 
            $set:{title,category,content}},
            {new: true },);
        if (!updated) return res.status(404).json({ message: "Article not found" });
        res.status(200).json({ message: "updated article", payload: updated });
    
})
//delete article(soft delete) =>protected route
authorRoute.delete('/articles/:id', async(req, res)=>{
  let aid = req.params.id
  let article = await ArticleModel.findById(aid)
  if(!article){
    res.status(401).json({message: "Article not found"})
  }
  let modifiedArticle = await ArticleModel.findByIdAndUpdate(aid,{
    $set: {isArticleActive: false}
  },{new: true})
  res.status(201).json({message: "Article has been deleted"})
})