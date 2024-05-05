const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define model and genre Schema together
const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body); 
    if (error)  return res.status(400).send(error.details[0].message);
     
    // Saving data in MongoDB
    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();
    
    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const { error } = validateGenre(req.body); 
    if (error) return res.status(400).send(error.details[0].message); 

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    })
  
    // If not existing, return 404
    if (!genre) return res.status(404).send('The course with the given ID was not found.');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id);

    if (!genre) return res.status(404).send('The course with the given ID was not found.');

    // Return the same genre to client
    res.send(genre);
})

// /api/courses/1 - Single Route Parameters
// We use route parameters for essential or required values
router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The course with the given ID was not found.');

    res.send(genre);
});

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(genre);
}

module.exports = router;