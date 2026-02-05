import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp= exp.Router()

//product API routes
//create Product
productApp.post('/products',async(req,res)=>{
    try{
        let newProduct=req.body;
        //create new product document
        let newProductDoc = new ProductModel(newProduct)
        console.log(newProductDoc)
        //save to DB
        await newProductDoc.save()
        //send res
        res.status(201).json({message:"Product created successfully"})
    }
    catch(err){
        res.status(400).json({message:"Error in creating product", error: err.message})
    }
})
//read products
productApp.get('/products',async(req,res)=>{
    try {//read products from DB
    let products= await ProductModel.find()
    //send res
    res.status(200).json({message:"sucessful", products: products})}
    catch(err){
        res.status(500).json({message:"Error in fetching products", error: err.message})
    }   
    
});
// Read product by objectId
productApp.get('/products/:id', async (req, res) => {
        //get objId from req params
        let objId = req.params.id;
        //read product from DB
        let productObj = await ProductModel.findById(objId);
        //send res
        res.status(200).json({ message: "Product found", payload: productObj });
            
    });
//Update products
productApp.put('/products/:id', async (req, res) => {
    //get objId from req params
    let objId = req.params.id; 
    //get modufied product data from req body
        let modifiedProduct = req.body;
        //make update in DB
        let latestProduct = await ProductModel.findByIdAndUpdate(objId,{ $set: {...modifiedProduct}},{ new: true });
        //send res
        res.status(200).json({ message: "Product modified successfully", payload: latestProduct });
    });
//Delete Products
productApp.delete('/products/:id', async (req, res) => {
    try {
        let objId = req.params.id;
        let deletedProduct = await ProductModel.findByIdAndDelete(objId);
        res.status(200).json({ message: "Product deleted", payload: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: "Error deleting product", error: err.message });
    }
});
