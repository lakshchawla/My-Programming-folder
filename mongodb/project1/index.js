const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Tomato",
//     rating: 1,
//     review: "Haha! Do you know, tomato is a fruit"
// });

Fruit.find(function(err, furits) {
    for (let i = 0; i < 3; i++) {
        console.log(furits[i].name);
    }
})