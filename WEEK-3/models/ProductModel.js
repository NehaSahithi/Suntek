import {Schema,model} from 'mongoose'
//create product schema ={pid,productName,price}
const productSchema=new Schema({
    pid:{
        type:String,
        required:[true, "Product ID is required"],
        unique:true,
        minLength:[4,'Minimum length is 4 characters']
       
    },
    productName:{
        type:String, 
        required:[true, "Product name is required"],
        minlength:[3,'Minimum length is 3 characters']
    },
    price:{
        type:Number, 
        required:[true, "Price is required"],
        
    }
},{
    strict:"throw",
});
export const ProductModel = model('Product', productSchema);
