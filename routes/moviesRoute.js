const router = require('express').Router();
const movieController = require('../controllers/movieController');

router.route('/')
    .get(movieController.index)
    .post(movieController.addMovie);

router.route("/:id")
    .delete(movieController.deleteMovie);
   

module.exports = router;