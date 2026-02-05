/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
 */

const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
const highTemps = temperatures.filter(t => t > 35);
console.log("Temperatures above 35°C:", highTemps);

// 2. map() to convert all temperatures from Celsius → Fahrenheit
const fahrenheitTemps = temperatures.map(t => (t * 1.8) + 32); 
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);

// 3. reduce() to calculate average temperature
const totalTemp = temperatures.reduce((sum, t) => sum + t, 0);
const avgTemp = totalTemp / temperatures.length;
console.log("Average Temperature:", avgTemp);

// 4. find() first temperature above 40
const firstAbove40 = temperatures.find(t => t > 40);
console.log("First temperature above 40°C:", firstAbove40);

// 5. findIndex() of temperature 28
const indexOf28 = temperatures.findIndex(t => t === 28);
console.log("Index of temperature 28°C:", indexOf28);


/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node" */
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
const longCourses = courses.filter(c => c.length > 5);
console.log("Courses with name length > 5:", longCourses);      

// 2. map() to convert course names to uppercase
const upperCourses = courses.map(c => c.toUpperCase());
console.log("Courses in uppercase:", upperCourses);

// 3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = courses.reduce((str, c, index) => {
    // If it's the first item, just return it uppercased, otherwise add the pipe
    if (index === 0) return c.toUpperCase();
    return str + " | " + c.toUpperCase();
}, "");
console.log("Course String:", courseString);

// 4. find() the course "react"
const foundCourse = courses.find(c => c === "react");
console.log("Found Course:", foundCourse);

// 5. findIndex() of "node"
const indexOfNode = courses.findIndex(c => c === "node");
console.log("Index of course 'node':", indexOfNode);


/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40 (pass marks)
const passMarks = marks.filter(m => m >= 40);
console.log("Pass Marks (≥40):", passMarks);

// 2. map() to add 5 grace marks to each student
const graceMarks = marks.map(m => m + 5);
console.log("Marks after adding 5 grace marks:", graceMarks);

// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, m) => {
    return (m > max) ? m : max;
}, 0);
console.log("Highest Mark:", highestMark);

// 4. find() first mark below 40
const firstFailMark = marks.find(m => m < 40);
console.log("First mark below 40:", firstFailMark);

// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(m => m === 92);
console.log("Index of mark 92:", indexOf92);