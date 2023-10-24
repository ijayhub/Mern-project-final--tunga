import express from 'express';
import { Movie } from '../models/movieModel.js';

const router = express.Router();

// adding a new move to d db
router.post('/', async (req, res) => {
try {
  if (
			!req.body.title ||
			!req.body.release ||
			!req.body.rating ||
			!req.body.genre ||
			!req.body.plot ||
			!req.body.notes
		) {
			return res
      .status(404)
      .send({
        message:
						'send all the required field:title,release,rating, genre, plot, notes',
				});
		}
		const newMovie = {
			title: req.body.title,
			release: req.body.release,
			rating: req.body.rating,
			genre: req.body.genre,
			plot: req.body.plot,
			notes: req.body.notes,
		};
		const movie = await Movie.create(newMovie);
		return res.status(201).send(movie);
	} catch (err) {
		console.log(err.message);
		res.send({ message: err.message });
	}
});
// Getting all the movies in our db
router.get('/', async (req, res) => {
	try {
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    return res.status(200).json({	count: movies.length,
			data: movies});
    
	} catch (err) {
		console.log(err.message);
		res.send({ message: err.message });
	}
});

// for deleting a movie
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await Movie.findByIdAndDelete(id);
		if (!result) {
			return res.status(404).json({ message: 'movie not found' });
		}
		return res.status(200).send({ message: 'movie deleted sucessfully' });
	} catch (err) {
		console.log(err.message);
		res.send({ message: err.message });
	}
});

export default router;