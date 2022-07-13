const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '62cdfad28f605003d01b3957',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores esse libero eligendi est beatae odio enim magnam tempora nisi nulla unde veniam eveniet ipsum alias, aut ex, dignissimos maxime!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/drgmee3w5/image/upload/v1657692341/YelpCamp/juijlhlpga7lleh92jd4.jpg',
                    filename: 'YelpCamp/juijlhlpga7lleh92jd4'
                },
                {
                    url: 'https://res.cloudinary.com/drgmee3w5/image/upload/v1657694127/YelpCamp/aluqcl6oytx1bm9gxhlz.jpg',
                    filename: 'YelpCamp/aluqcl6oytx1bm9gxhlz'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});