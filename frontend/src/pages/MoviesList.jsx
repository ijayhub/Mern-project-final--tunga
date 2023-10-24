import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

const MoviesList = () => {
	const [movieLists, setMovieLists] = useState([]);

	useEffect(() => {
		fetch('http://localhost:80/movies')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMovieLists(data.data);
			})
			.catch((err) => {
        setMovieLists(err);
        
			});
	}, []);

	return (
		<div>
			<div className='max-w-7xl mx-auto'>
				<div className='flex justify-around items-center mt-20 '>
					<h2 className='text-lg lg:text-3xl font-bold hover:text-red-700'>
						Movie List Added By Users
					</h2>
					<Link to='/add'>
						<AiOutlinePlusSquare className='text-md lg:text-2xl text-blue-700 font-extrabold' />
					</Link>
				</div>
				<main className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-20 mx-4'>
					{Array.isArray(movieLists) &&
						movieLists.map((movie) => (
							<div
								key={movie._id}
								className='bg-white shadow-2xl p-6 rounded-xl'>
								<h3 className='text-center font-mono text-2xl font-bold hover:text-red-700'>
									{movie.title}
								</h3>
								<hr />
								<p className='movieList-release'>
									Year Released:{' '}
									<span className='text-black'>{movie.release}</span>
								</p>
								<hr />
								<p className='movieList-rating'>
									Rating: <span className='text-black'>{movie.rating}</span>
								</p>
								<hr />
								<p className='movieList-genre'>
									Genre: <span className='text-black'>{movie.genre}</span>
								</p>
								<hr />
								<p className='movieList-plot'>
									{' '}
									Movie Plot: <span className='text-black'>{movie.plot}</span>
								</p>
								<hr />
								<p className='movieList-notes'>
									{' '}
									Review: <span className='text-black'>{movie.notes}</span>
								</p>
                <Link to={`/movies/delete/${movie._id}`}>
									<div className='flex justify-end mt-6'>
										<FiTrash className='text-red-700' />
									</div>
								</Link>
							</div>
						))}
				</main>
			</div>
		</div>
	);
};

export default MoviesList;
