# 🏕 YelpCamp

<a href="https://local-campgrounds.herokuapp.com/" target="_blank">
  <img src="https://imgur.com/a/Q9M8ihH" alt="Campground">
</a>


This is a web application where users can create and review campgrounds. In order to review or create a campground, users must have an account.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
* Search campground by name or location.
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price.

## Running it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code
3. Crreate a mapbox account to get a token

Install node, using the [Node Version Manager](https://github.com/nvm-sh/nvm "Official Node Version Manager Github page").

Alternatively, you can use nodemon to run the app.
- To install nodemon, run ```npm install nodemon -g```

```
git clone git@github.com:wechu07/Yelpcamp.git
cd YelpCamp
npm install
```

I am using SSH based authentication. The alternative for token-based authentication is:
```
https://github.com/wechu07/Yelpcamp.git
```

Create a .env file (or just export manually in the terminal), and run this command:

```cp sample.env .env```

Run ```mongod``` in another terminal and ```node app.js``` or ```nodemon app.js``` in the terminal with the project.

Then go to [localhost:3000](http://localhost:3000/)

## Contributors
<ul>
    <li><a href="https://github.com/wechu07">Wechuli Simiyu (Github)</a></li>
</ul>