import exp from 'express'
import { userApp } from './APIs/UserAPI.js' 
import {productApp} from './APIs/ProductAPI.js'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser';
const app=exp()
 //assign port number
const port=3000


 
//connect to db server
async function connectDB(){
    try {
        await connect('mongodb://localhost:27017/anurag_db')
        console.log('DB connection successful')
        //start the server
        app.listen(port,()=>console.log(`Server is running on port ${port}`))

    } catch (err) {
        console.log('DB connection failed', err)
    }
     // .then(()=>console.log('DB connection successful'))
    // .catch(err=>console.log('DB connection failed',err))
}
connectDB();

// body parser middleware
app.use(exp.json());
//cookie parser middleware
app.use(cookieParser());

//if path starts with /user-api , forward req to userApp

app.use('/user-api', userApp);
app.use('/product-api', productApp);

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Error occurred", error: err.message})
});