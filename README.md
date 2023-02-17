# Lucre Cash App 
An app for tracking finances that uses REST API to tell users of their present financial situation and ideal financial situation given their current income.

## Click the links below to test the deployed versions
Test the backend api using Postman https://lucrecash-api.up.railway.app/ 
- Routes (/signup, /login, /dashboard)
    -/signup
    On Postman, click on body > select raw > select JSON
    Create an object using the keys: "fullnames, username, email, password" and add matching values.
    Click send
    
Test both the frontend and backend apps integrated together https://lucrecash.up.railway.app/

## How to run the app
1. Fork or download the app 
2. Navigate to the backend folder
3. Install all the dependencies using "npm i" command (see below for a list of the dependencies)
4. Start the server by running "nodemon index.js". The app will be served at http://localhost:3000
5. Navigate to the frontend folder to concurrently run the frontend server

## Features
- User signup
    - Validates data input to ensure correct details have been keyed in
    - Checks if the username exists; If not, username is created and added to the database

- User login
    - Verifies data entry to make sure the right information has been entered
    - Creates a json web token that transfers a user to the dashboard with their login details

- Create Function
    - User's financial details (income, expenses and debt) are input and added to the database

- Update Function
    - Users' financial details are updated in the database

## Future Features
1. Gmail API to allow users to login using their gmail accounts
2. Generating a JWT token on the registration page so that it takes the user directly to the dashboard

## Dependencies
- body-parser
- cors
- dotenv
- express
- joi
- jsonwebtoken
- mysql2
- sequelize

## Snapshots of the backend code
![alt text](https://github.com/adara-code/lucreCash_Backend_Serverside/blob/main/screenshots/screenshot1.png)


![alt text](https://github.com/adara-code/lucreCash_Backend_Serverside/blob/main/screenshots/screenshot2.png)


![alt text](https://github.com/adara-code/lucreCash_Backend_Serverside/blob/main/screenshots/screenshot3.png)
