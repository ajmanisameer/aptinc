# aptinc.
All purpose tech inc.

## Pre-requisites:
- You should have node and npm installed in your local pc. To do this download and install from this link - https://nodejs.org/en/download/ 


## How to set-up MongoDB for this app

How to set-up MongoDB for this app - 
 - Head over to MongoDB Atlas and create an account or use existing
 - Create a cluster using the free tier and select the default settings for the cloud provider and location. 
 - Select your preferred project name and organization or use default.
 - It will also prompt you to select the user and password for connecting to database. Just remember the credentials you'd add as it will be below to form the connection string.
 - Once you are on the dashboard page, click on the "Network access" on the left.
 - Click on the "Add IP Address" on the right and select "Allow access from anywhere" from the popup screen. This may take upto 2 - 5 min to complete
 - Head over to the "Database" tab from the left panel. And click "Connect".
 - Click on the "Connect to Application" and copy the connection string displayed on the popup.
 - Replace the password in the connection string. This will be used for deployment in the Deployment step mentioned below.


## Development / Quick start

The below describes the steps for local setup and development -
1. Clone the complete repository using the branch "master" on your local pc.
2. On the root locationfind app.js, and replace the following
 `dbURI` - <This should be the connection string copied from Atlas MongoDB>
3. Run `npm i` for a installing node packages. 
4. Run `nodemon app` to run dev server.
5. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## MODULES Breakdown
The source code is broken down into multiple modules.

# app.js
    Starting point of the application
# routes
    All the backends routes triggers from this js file
# controllers
    Routes trigger the controllers which checks the following
    - Validations
    - Generate web token for user authentication/authorization
    - Handle errors and display messages for login page
# models
    Include User schema for mongoDB storage
# middlewares
    Decodes the token and checks if user is verified and then redirects
# public
    Images and Styles used in the application
# views
    Containes all the views breaked down into different modules for easy update
    Views are build with embedded javascript template generating HTML markup. 



## Email Configuration

   1 -  Follow the below link to `Create and use app password` in your gmail accound
    https://support.google.com/accounts/answer/185833?hl=en

   2 -  Navigate to `config/mail.js` and replace the following
     `email` -  "<here goes your email id>",
     `password`: "<here goes your app password which you retrieved from the first step>",
   