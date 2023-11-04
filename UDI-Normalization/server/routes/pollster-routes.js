const express = require('express');
const router = express.Router();
const { pollster } = require('../models');


module.exports = router;

const express = require("express");

const { validateToken } = require("../middleware/authMiddleware");

router.get("/", validateToken, async (req, res) => {
    const pollsterList = await pollster.findAll();
    res.json({ pollsterList});
});

router.get("/byID/:id", async (req, res) => {
    const id = req.params.id;
    const pollster = await pollster.findByPk(id);
    res.json(pollster);
});

router.get("/byID/:id", async (req, res) => {
    const id = req.params.id;
    const pollsterList = await Posts.findAll({
        where: { pollster: id },
        include: [survey],
    });
    res.json(pollsterList);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    pollster.cedula_encuestador = req.pollster.cedula_encuestador;
    pollster.correo_electronico = req.pollster.correo_electronico;
    await pollster.create(post);
    res.json(post);
});

router.put("/cedula", validateToken, async (req, res) => {
    const { newcedula, cedula_encuestador } = req.body;
    await pollster.update({ title: newcedula }, { where: { cedula_encuestador: cedula_encuestador } });
    res.json(newcedula);
});

router.put("/correoElectronico", validateToken, async (req, res) => {
    const { newcorreo, id } = req.body;
    await pollster.update({ pollster_correo_electronico: newcorreo }, { where: { id: id } });
    res.json(newcorreo);
});

router.delete("/:pollsterID", validateToken, async (req, res) => {
    const pollsterID = req.params.pollsterID;
    await pollster.destroy({
        where: {
            id: pollsterID,
        },
    });

    res.json("DELETED SUCCESSFULLY");
});

module.exports = router;