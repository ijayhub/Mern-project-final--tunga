import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [open, setOpen] = useState(false)
	function Menu() {
		setOpen(!open)
	}
	return (
		<header className='header'>
			<div className='head-container'>
				<Link to='/' className='link'>
					<h1 className='head-title'>
						CRMovies{' '}
						<span className='ml-2'>
							<RiMovie2Fill />
						</span>
					</h1>
				</Link>
				<FiMenu
					className='lg:hidden block cursor-pointer h-6 w-6'
					onClick={Menu}
				/>
				<nav
					className={`lg:flex lg:items-center lg:w-auto w-full ${
						open ? 'block' : 'hidden'
					}`}>
					<ul className='lg:flex lg:justify-between lg:items-center'>
						<li className='nav-space'>
							<Link to='/add'>AddMovie</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
