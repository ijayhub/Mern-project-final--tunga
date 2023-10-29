import PropTypes from 'prop-types';
import Button from '../components/Button';


const Template = ({ movies }) => {
	return (
		<div className='template'>
			{Array.isArray(movies) &&
				movies.map((movie) => (
					<div
						key={movie.imdbID}
						className='template-container slide-in-elliptic-top-fwd'>
						<div className='mb-6'>
							<img
								src={movie.Poster}
								alt={movie.Title}
								className='h-[200px] w-full object-cover'
							/>
						</div>
						<h4 className='template-title1 font-bold text-center'>
							{movie.Title}
						</h4>
						<a href={`/movies/details/${movie.imdbID}`}>
							<div className='btn-container'>
								<Button className='btn-template' value='Click for movie info' />
							</div>
						</a>
					</div>
				))}
		</div>
	);
};

Template.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			imdbID: PropTypes.string.isRequired,
			Poster: PropTypes.string.isRequired,
			Title: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Template;
