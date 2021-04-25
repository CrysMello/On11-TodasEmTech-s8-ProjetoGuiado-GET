const express = require("express");
const app = express();

const filmes = require("./routes/filmesRoutes");
const series = requite("./routes/seriesRoutes");

app.use("/filmes", filmes);
app.use("/series", series);

module.exports = app;
