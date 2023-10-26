import 'dotenv/config';
// import { PORT, dbURL} from './'
import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes.js';
import cors from 'cors';

// Setting up the application
const app = express();

//middleware
app.use(express.json());

// middleware for handling cors(request between the backend and frontend)
app.use(cors());



// router to the db
app.use('/movies', movieRoutes);

mongoose
	.connect(process.env.dbURL)
	.then(() => {
		console.log('Connected to database');
		app.listen(process.env.PORT);
	})
	.catch((err) => {
		console.log(err);
	});
