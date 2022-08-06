# MovieHouse

This project is created using Angular as frontend and node, express as backend and MongoDb as database.

## Installation
### Prerequisites
- Angular CLI <br> 
- Mongodb <br>
- Node <br>

Step 1: Clone the git repository <br>
Step 2: Run `npm install` to install all the dependencies. <br>
Step 3: Upload the ./src/app/data.json in mongodb compass or create a collection named "movies" and insert all the data using the mongodb

## Frontend server

Run `ng serve` for frontend server. Navigate to `http://localhost:4200/`.

## Backend server

Run ` sudo systemctl start mongod` to start monogodb server.<br>
Run `node ./src/backend/index.js` for backned server from the MovieAdda directory.


## Dependencies used

1 Express: Express is a fast, unopinionated minimalist web framework for Node.js <br>
- It allows to setup middlewares to respond to HTTP Requests.<br>
- It defines a routing table which is used to perform different actions based on HTTP method and URL.<br>
- It allows to dynamically render HTML Pages based on passing arguments to templates.<br>

2 cors: Cross-Origin Resource Sharing is a protocol that enables scripts running on a browser client to interact with resources from a different origin. <br>

3 mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.
-  Manages relationships between data, provides schema validation.<br>
-  Used to translate between objects in code and the representation of those objects in MongoDB <br>

4 ng-bootstrap : It is used to open a new modal in angular2+ <br>

5 angular-bootstrap-md: A boostrap module for angular application for making responsive design and some pre ready templates <br>

6 @angular/youtube-player: It is used to play youtube videos in angular applications. <br>

## My Approach to solve the problem

In  dashboard, I have created cards to display movies poster and title where I run for loop, it fetch data by using movie ID from database. On Clicking cards we get a Modal it shows a description about movie that I have received from the card. Now by clicking on modal we will redirect to movie page using angular routing here I am  passing  id of the movie with routing and receives it in movie page and then get the data from back-end using id. I have created an API to fetch json movie object from backend by using movie id.  I am using this API in dashboard and movie page to get all the movies data. In movie page I am playing the movie trailer using the youtube player library.


