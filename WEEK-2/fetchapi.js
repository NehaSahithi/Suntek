//make API request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(response=>console.log("res is",response))
.catch(error=>console.log("error is",error));
//modern syntax to consume promise
async function getData(){
    //make api and get request
    let res=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await res.json();
    console.log("data using async await",data);

}
getData();  
