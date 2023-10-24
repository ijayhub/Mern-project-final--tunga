import Nav from "./components/Nav"
import AddMovies from "./pages/AddMovies"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import {Routes, Route} from "react-router-dom"
import MoviesList from "./pages/MoviesList"
import MovieDelete from './pages/MovieDelete';


const App = () => {
  return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies/details/:imdbID' element={<MovieDetails />} />
				<Route path='/movies/delete/:id' element={<MovieDelete />} />
				<Route path='/list' element={<MoviesList />} />
				<Route path='/add' element={<AddMovies />} />
			</Routes>
		</div>
	);
}

export default App