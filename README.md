# My Family Recipes
A web application that stores user-submitted recipes and allows other users to make changes to their recipes.

## Features
* Uses Redux Thunk middleware to send and receive data from API
* Renders JavaScript and HTML onto the DOM through React components
* Allows for user authentication and authorizes users with sessions
* Users can add and edit recipes

## Tech Used
### Frontend
* React.js 
* Redux 
* Bootstrap 
* React Bootstrap
* React Router
* Styled component

### Backend 
* Ruby [2.6.1]
* Rails [5.2.3] - MVC framework used as an API
* Bcrypt - gem used for encryption and securing user passwords
* Faker - gem used to easily generate fake data for recipes and ingredients
* Fast_jsonapi - serializes API routes to JSON
* Postgreql -  database


## Installing

### Backend Installation
* Clone backend repo to local machine `git clone <backend-repo-url>`.
* Run `bundle install` to instal dependencies.
* Ensure that Postgresql is running.
* Run `rails db:create` to create database locally.
* Run `rails db:migrate` to create tables into the database.
* Run `rails db:seed` to create seed data.
* Run `rails s` to run server

### Frontend Installation
* Clone this repo to local machine `git clone <this-repo-url>`.
* Ensure Backend API is running at `http://localhost:3000/`
* Run `npm install` to install all dependencies.
* Run `npm start` to start server.