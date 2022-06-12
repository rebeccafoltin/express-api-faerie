# Faerie Path

# Description 
A website where users can create their own faeries with unique faerie powers!
Click here to explore: https://rebeccafoltin.github.io/faerie-path-react-front/

## Introduction
Ever dreamed of making your own faeries? 

Welcome to Faerie Path, a Database for Spiritual Denizens! Faeriepath is an app that allows users to create, read, update, and delete their 'faerie' resources. Faerie resources include faerie names and faerie powers. The website uses React as a front-end framework, MongoDb as a database, and express and node as back-end frameworks. 

## Set Up Instructions
- Fork and clone this repository
- Change into directory
- Checkout to a new branch
- Run ``npm install`` in the command line
- Run ``npm run server`` in the command line

## Project Planning 
- Created User Stories
- Created Wireframes
- Created ERD
- Set up environment by downloading GA provided React Client and Express API templates

### API
- Created resource end points
- Tested resource's end points with curl scripts 
- Added User ownership to resource controller
### Client
- Created sign up/in/out with React
- Created CRUD actions with React
### Personal Touches
- Found classic faerie art work by Brian Froud and styled it with React

## User Stories
- User can sign up.
- User can sign in, sign out, and change password.
- User can create a faerie resource
- User can read a faerie resource
- User can index faerie resources
- User can update a faerie resource
- User can delete a faerie resource

## API Routes
### _Faerie Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | `/faeries`      | read list of faeries | index or list     |
| GET           | `/faerie/:id`   | read single faerie   | show or retrieve |
| POST          | `/create-faerie`| create faerie        | create           |
| PATCH         | `/faerie/:id`   | update faerie        | update           |
| DELETE        | `/faerie/:id`   | delete faerie        | destroy          |

## Technologies Used

|    Libraries      | Languages        | Frameworks              | Database          | Version Control
|:-----------------------------------------|:----------------|:---------------------|:-----------------|:-----------------|
| [React.js](https://reactjs.org/)       |    [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)        |  [Express](https://expressjs.com/) | [MongoDB](https://www.mongodb.com/)   | [GitHub](https://github.com/) |[Javascript](https://www.javascript.com/)          | [BootStrap](https://getbootstrap.com/)       |           |
|  [Axios](https://www.npmjs.com/package/axios)         | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)          |        |          |
|    [Mongoose](https://mongoosejs.com/)        |           |        |         |
|          |          |       |         |

### Entity Relationship Diagram
![erd.png](erd.png)
https://photos.app.goo.gl/kfqDrzZewNQJpDJD8 

### Wireframe
![wireframe.png](wireframe.png)
https://photos.app.goo.gl/PkeRm6bAVtC3w9aRA
  
### Future Goals
-  I plan on adding more entities to faerie resources.
- I plan on creating an interactive 'choose your own adventure' game and add it to the website.

### [Link to Front End Repo](https://github.com/rebeccafoltin/faerie-path-react-front)
#### [Link to Back End Repo](https://github.com/rebeccafoltin/express-api-faerie)

### Links to Deployed Sites:
- [Link to the API Deployed](https://stormy-fortress-08010.herokuapp.com/)
- [Link to the Client Deployed](https://rebeccafoltin.github.io/faerie-path-react-front/)

