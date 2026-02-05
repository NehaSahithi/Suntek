1. Generate package.json
   nom init -y
2. Create server.js
3. Install , import "express" and create HTTP server .Assign port - in

### Connect MongoDB database

REST API -> mongodb native driver -> MongoDB server
REST API -> mongodb ODM tool(mongoose) -> MongoDB server

note : sequelize - must lean relation db
a. install mongoose - npm i mongoose and connect to mongodb
b.create schema of resource
c.create a model of that schema
d.perfrom db operations in that model

Error Handling

Running Validation during update

.gitignore

// authentication
every api contain 2 routes

1. public routes- can be accessed by any user
2. protected routes - can be accesable by authenticated user

//user authentication - submitting creditionals and getting a token, it is a same as pay the amount and get the ticket once the token recevied by user then he is an authenticated user

// steps for user authentication
after receving user crenditals objects
step 1: api verify the username
step 2: if usernmae is matched it compares the password
step 3: if passwords are matched it genertaes an encrypted token
step 4: it sends the token in response back to the client

//json web token
once the user crenditanls are verified, then the login route creates a jwt token

//stora
1.local storage 2. session strorage 3. cookies
//storage of token in browser
browser has three storage localities:
connect- can be accesable by jaava script of the user
normal cookie-can also be accessable by javascript
http only cookie - can't be accesed by javascript of the browser , so this is the safest place to store jwt token aftet user authenticaton

// making authenticated request
1.when client application makes request after succesful login http only cookie will be attched to evey request automatically
2.the middle ware in express can extract cookie from request using cookie - parser module
