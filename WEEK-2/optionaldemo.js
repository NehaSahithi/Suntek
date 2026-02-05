let Student={
    rollNo:1,
    name:"joe",
};
console.log(Student.rollNo);
console.log(Student.name);
console.log(Student.city); //undefined
//optional chaining
console.log(Student.city?.length??"propert not existed"); //undefined.length    
