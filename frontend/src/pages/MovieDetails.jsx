import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);
	const { imdbID } = useParams();

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${import.meta.env.VITE_SOME_VALUE}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovie(data);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
			});
		}, [imdbID]);

	return (
		<section className='max-w-7xl mx-auto mt-20'>
			{movie && (
					<div key={movie.imdbID} className='lg:flex ml-10 lg:ml-0'>
						<div className='mr-20 relative mt-10'>
							<img
								src={movie.Poster}
								alt={movie.Title}
								className=' template-container w-full'
							/>
							<div className='bg-red-700 text-white rounded-full absolute top-2 right-0 mr-4'>
								<span>{movie.Rated}</span>
							</div>
						</div>
						<div className='leading-loose'>
							<h4 className='lg:text-3xl lg:text-center font-bold hover:text-red-700 mt-10 lg:mt-0'>
								{movie.Title}
							</h4>
							<p className='details-title'>Genre</p>
							<span>{movie.Genre}</span>
							<p className='details-title'>Actors</p>
							<span>{movie.Actors}</span>
							<p className='details-title'>Plot</p> <span>{movie.Plot}</span>
							<p className='details-title'>Release Date of the Movie</p>{' '}
							<span>{movie.Released}</span>
							<p className='details-title'>Rate this Movie</p>{' '}
							<span>{movie.imdbRating}</span>
							<p className='details-title'>How many minutes?</p>{' '}
							<span>{movie.Runtime}</span>
						</div>
					</div>
				)}
				{error && (
					<div className='text-center md:text-2xl font-mono font-bold mt-3'>
						{error}
					</div>
				)}
		</section>
	);
};

export default MovieDetails;
