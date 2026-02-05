let product={
    productName:"LED Telivision",
    brand:"Sony",
    price:100000,

}
let discountProduct={...product,price:40000,brand:"LG"};
console.log("Original Product:",product);
console.log("Discount Product:",discountProduct);
