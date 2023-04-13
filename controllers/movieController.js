const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');


// What is index?
// select * from warehouse
exports.index = (_req, res) => {
    // accessing the table name
  knex('movies')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

exports.addMovie = (req, res) => {
    console.log(req.body)
    if (!req.body.title || !req.body.overview || !req.body.vote_average || !req.body.poster_path || !req.body.backdrop_path || !req.body.release_date
        ) {
         return res.status(400).send("Could not add new movie. Please fill in all of the missing fields");
    }

    const newMovie = req.body;
    newMovie.id = req.body.id;

    knex("movies")
    .insert(newMovie)
    .then(data => {
        res.status(201).send("movie successfully created!");
    })
    .catch((err) => {
        res.status(400).send(`Error in creating new warmovie ehouse ${err}`);
    })
    
}

exports.deleteMovie = (req, res) => {
    console.log(req.params.id)
    knex("movies")
    .delete()
    .where({id: req.params.id})
    .then(() => {
        res.status(204).send();
    })
    .catch((err) => {
        res.status(400).send(`Error in deleting movie ${req.params.id} ${err}`)
    })
}

exports.deleteWarehouse = (req, res) => {
    knex('warehouses')
      .delete()
      .where({ id: req.params.id })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) =>
        res.status(400).send(`Error deleting Warehouse ${req.params.id} ${err}`)
      );
  };