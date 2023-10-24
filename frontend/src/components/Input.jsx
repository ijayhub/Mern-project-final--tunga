import { useState } from "react";
import PropTypes from 'prop-types';



const Input = ({searchMovies}) => {
		const [search, setSearch] = useState('');
	
	
	// create a function to handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		searchMovies(search)
		
	};
	return (
		<div>
			<form className='form-container' onSubmit={handleSubmit}>
				<input
					type='text'
					className='input-search'
					placeholder='search for movies'
					value={search}
					onChange={(e)=>setSearch(e.target.value)}
				/>
				<button type='submit' placeholder='search for movies' className='btn-hero'>
					Click to search
				</button>
			</form>
		</div>
	);
};
Input.propTypes = {
	searchMovies: PropTypes.func.isRequired,
};

export default Input;
