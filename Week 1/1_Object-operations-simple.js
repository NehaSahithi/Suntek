/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    
Read and print the user’s name and email
Add a new property lastLogin: "2026-01-01"
Update role from "student" to "admin"
Delete the isActive property
Use Object.keys() to list all remaining fields */

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1.Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2.Add a new property lastLogin: "2026-01-01"
user.lastlogin = "2026-01-01";

// 3.Update role from "student" to "admin"
user.role = "admin";

// 4.Delete the isActive property
delete user.isActive;

// 5.Use Object.keys() to list all remaining fields
console.log("Remaining fields:", Object.keys(user));

/* Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    
Calculate total marks
Calculate average marks
Find the highest_marks scoring subject
Add a new subject computer: 90 */

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// 1.Calculate total marks
let totalmarks = 0;
for (let sub in marks) {
    totalmarks += marks[sub];
}
console.log("Total Marks:", totalmarks);

// 2.Calculate average marks
let avgmarks = totalmarks / Object.keys(marks).length;
console.log("Average Marks:", avgmarks);

// 3.Find the highest_marks scoring subject   
let highest_marks_marks="";
let highscore=0;
for(let sub in marks){
    if(marks[sub]>highscore){
        highscore=marks[sub];
        highest_marks=sub;
    }
}
console.log("Hightest Scoring Subject:", highest_marks, "with score", highscore);

// 4.Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);






