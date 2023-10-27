import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { enqueueSnackbar } from 'notistack';

const MovieDelete = () => {
  const [error, setError] = useState(null);
	const navigate = useNavigate();
	const { id } = useParams();

	const handleDeleteMovie = () => {
		axios
			.delete(`http://backend-crud-4j9x.onrender.com/movies/${id}`)
			.then(() => {
				enqueueSnackbar('Movie deleted successfully', { variant: 'success' });
				navigate('/list');
			})
			.catch((err) => {
				enqueueSnackbar('Error deleting movie', { variant: 'error' });
				setError(err);
			});
  };
  const handleCancelMovie = () => {
    navigate('/list');
  }

	return (
		<div className='max-w-5xl mx-auto'>
			<div className='flex flex-col justify-center items-center mt-20 shadow-2xl p-4  mx-2 lg:mx-0 '>
				<h3 className='text-center mb-6 font-bold text-lg lg:text-4xl  mx-4 lg:mx-0 '>
					Are You Sure You Want To Delete This Movie?
        </h3>
        <p className='mb-4 text-lg font-mono font-bold text-center'>If deleted this action can not be reverted</p>
				<div className='flex flex-col justify-center items-center w-full'>
					<Button className='delete-btn' onClick={handleDeleteMovie} value="Yes, I Want To Delete This Movie"/>
					<div>
						<Button className='delete-btn2' onClick={handleCancelMovie} value="No, Cancel"/>
					</div>
				</div>

				{error && (
					<div className='text-center md:text-2xl font-mono font-bold mt-3'>
						{error}
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieDelete;
