const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.json(cars);
    } catch(err){
        res.status(500).json
        ({
            success: false, 
            errorMessage: 'cannot get cars'
        })
    }
})

router.post('/', async (req, res) => {
    const postBody = req.body;
    console.log(postBody)
    try {
        const cars = await db('cars').insert(postBody);
        res.status(201).json(cars);
    } catch(err){
        res.status(500).json
        ({
            success: false,
            errorMessage: 'car not posted',
            message: err.message
        })
    }
})



module.exports = router;