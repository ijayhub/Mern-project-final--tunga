import { useEffect } from "react";
import { useState } from "react";
import Input from "../components/Input";
import Template from './Template'
import top from '../img/top.png'
import { Watch } from 'react-loader-spinner';
import Footer from "../components/Footer";



const Home = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('Available');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://www.omdbapi.com/?s=${term}&apikey=${
          import.meta.env.VITE_SOME_VALUE
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setMovies(data.Search);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setIsLoading(false);
        });
      
    },700)
	}, [term])
  return (
		<main>
			<div className='hero'>
				<h2 className='text-lg lg:text-3xl text-red-700 font-bold mb-7'>
					Movies {term}
				</h2>
				<p className='cinema-para'>
					Movies is a mirror by which we often see ourselves...
				</p>
				<Input searchMovies={(search) => setTerm(search)} />
			</div>
			<div>
				{isLoading && (
					<div className='flex items-center justify-center mt-6 lg:mt-20'>
						<Watch
							height='50'
							width='50'
							radius='48'
							color='red'
							ariaLabel='watch-loading'
							wrapperStyle={{}}
							wrapperClassName=''
							visible={true}
						/>
					</div>
				)}
			</div>

			<div>{!isLoading && <Template movies={movies} />}</div>
			{error && (
				<div className='text-center md:text-2xl font-mono font-bold mt-3'>
					{error}
				</div>
			)}
			{/* The arrow takes you back to the top */}
			<div className='top-container'>
				<a href='#'>
					<img src={top} alt='top' className='top-arrow' />
				</a>
			</div>
			<hr className='mt-14' />
			<div className='flex justify-center items-center p-5'>
				<Footer />
			</div>
		</main>
	);
}

export default Home