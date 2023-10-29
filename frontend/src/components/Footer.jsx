
import { RiMovie2Fill } from 'react-icons/ri';
const Footer = () => {
  return (
		<a href='/'>
			<footer className='flex justify-center items-center text-2xl lg:text-4xl hover:text-red-700 font-bold'>
				CRMovies{' '}
				<span className='ml-2'>
					<RiMovie2Fill />
				</span>
			</footer>
		</a>
	);
}

export default Footer