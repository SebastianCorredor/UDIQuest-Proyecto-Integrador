/*const express = require('express');
const { survey } = require('../models/survey-model.js');
const router = express.Router();

router.get("/", (req, res) => {
    res.json("hey");
});

router.post("/", async (req, res) => {
    try {
        const post = req.body;
        const newSurvey = await survey.create(post); // Aquí se crea la nueva encuesta

        res.json(newSurvey); // Se responde con la nueva encuesta creada
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la encuesta' });
    }
});

module.exports = router;*/