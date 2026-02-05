/*HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
*/
let isLoggedIn = true;
let isProfileComplete = false; 
// 1. If user is not logged in → show "Please login"
let message = "";

if (!isLoggedIn) {
    message = "Please login";
}
// 2. If logged in but profile incomplete → show "Complete your profile"
else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";
}
// 3. If logged in and profile complete → show "Welcome back!"
else if (isLoggedIn && isProfileComplete) {
    message = "Welcome back!";
}
// 5. Print the message
console.log(message);

/*
HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label */
let price = 1299;
// 1. If price < 500 → "Budget Course"
let courseTag = "";
if (price < 500) {
    courseTag = "Budget Course";
}
// 2. If price between 500–1000 → "Standard Course"
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
// 3. If price > 1000 → "Premium Course"
else if (price > 1000) {
    courseTag = "Premium Course";
}
// 5. Print the label
console.log(courseTag);

/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message */
let hasPaid = true;
let hasCompletedBasics = false;

let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";




