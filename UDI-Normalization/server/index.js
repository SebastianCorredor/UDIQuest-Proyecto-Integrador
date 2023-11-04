const express = require('express');
const app = express();
app.use(express.json());
const db = require('./models');

const pollsterRouter = require('./routes/pollster-routes.js');

app.use("/encuestador", pollsterRouter);

db.sequelize.sync().then(()=>{

    app.listen (8005, () =>{

        console.log("Server Running");

    });
});