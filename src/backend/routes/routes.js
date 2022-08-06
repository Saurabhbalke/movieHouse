const express = require("express");
const router = express.Router();
const Movies = require("../model/movies");

router.get("/fetchmovies", async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const movies = await Movies.find({ id: req.params.id });
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;