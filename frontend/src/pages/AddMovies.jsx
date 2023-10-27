import top from '../img/top.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';


const AddMovies = () => {
	const [title, setTitle] = useState('')
	const [release, setRelease] = useState('');

	const [rating, setRating] = useState('');
	const [genre, setGenre] = useState('');
	const [plot, setPlot] = useState('');
	const [notes, setNotes] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate()


	

	// A function created to handle submission from the user
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title,
			release,
			rating,
			genre,
			plot,
			notes
		};
		axios
			.post('https://backend-crud-4j9x.onrender.com/movies', data)
			.then(() => {
				enqueueSnackbar('Movie added', { variant: 'success' });
				navigate('/list');
			})
			.catch((err) => {
				enqueueSnackbar('error', { variant: 'error' });
				setError(err.message);
			});
	}
  return (
		<>
			<form onSubmit={handleSubmit} className='create-container'>
				<h2 className='RRform'>Rating and Review Form</h2>
				<div className='create-div'>
					<label htmlFor='title' className='create-title'>
						Title of the Movie
					</label>
					<input
						type='text'
						placeholder='Title'
						className='create-input'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						name='title'
					/>
				</div>

				<div className='create-div'>
					<label htmlFor='release' className='create-title'>
						Release Date
					</label>
					<input
						type='date'
						placeholder='Release Date'
						className='create-input'
						value={release}
						name='release'
						onChange={(e) => setRelease(e.target.value)}
					/>
				</div>
				<div className='create-div'>
					<label htmlFor='rating' className='create-title'>
						Your Personal Rating of the Movie
					</label>
					<select
						name='rating'
						className='create-input'
						value={rating}
						onChange={(e) => setRating(e.target.value)}>
						<option value='' hidden></option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor='genre' className='create-title'>
						Genre of the Movie
					</label>
					<select
						name='genre'
						className='create-input'
						value={genre}
						onChange={(e) => setGenre(e.target.value)}>
						<option value='' hidden></option>
						<option value='Family'>Family</option>
						<option value='Romcom'>Romcom</option>
						<option value='Horror'>Horror</option>
						<option value='Comedy'>Comedy</option>
						<option value='Action'>Action</option>
					</select>
				</div>
				<div className='create-div'>
					<label htmlFor='plot' className='create-title'>
						Plot about the Movie
					</label>
					<textarea
						name='plot'
						cols='30'
						rows='10'
						className='create-textarea'
						value={plot}
						onChange={(e) => setPlot(e.target.value)}
						placeholder='description...'></textarea>
				</div>
				<div className='create-div'>
					<label htmlFor='notes' className='create-title'>
						Reviews about the Movie
					</label>
					<textarea
						name='notes'
						cols='30'
						rows='10'
						className='create-textarea'
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						placeholder=' What can you say (final notes)...'></textarea>
				</div>
				<div className='btn-create-container'>
					<button type='submit' className='btn-create'>
						Submit Feedback
					</button>
				</div>
			</form>
			{/* The arrow takes you back to the top */}
			<div className='top-container'>
				<a href='#'>
					<img src={top} alt='top' className='top-arrow' />
				</a>

				{error && (
					<div className='text-center md:text-2xl font-mono font-bold mt-3'>
						{error}
					</div>
				)}
			</div>
		</>
	);
}

export default AddMovies;
