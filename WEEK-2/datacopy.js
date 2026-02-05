let student={
    collegename:"ANURAGUNIVERSITY",
    collegeadress:{
        street:"kondapur",
        city:"hyderabad"
    },
    collegepincode:500039,

}
let student2={...student};
//check
student.collegename="abcd";
student2.collegeadress.street="madhapur";
console.log("STUDENT 1",student);  
console.log("student 2",student2);
