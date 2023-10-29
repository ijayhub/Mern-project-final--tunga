import { lazy,Suspense } from "react"
import Nav from "./components/Nav"
import {Routes, Route} from "react-router-dom"



// To improve performance of the application
const Home = lazy(() => import ("./pages/Home"))
const MovieDetails = lazy(() =>import("./pages/MovieDetails"));
const MovieDelete = lazy(() => import("./pages/MovieDelete"));
const MoviesList = lazy(() => import("./pages/MoviesList"));
const AddMovies = lazy(() =>import ("./pages/AddMovies"));

const App = () => {
  return (
		<div>
			<Nav />
			<Suspense
				fallback={
					<h1 className='text-2xl lg:text-4xl font-mono font-bold text-center mt-9'>
						Loading...
					</h1>
				}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movies/details/:imdbID' element={<MovieDetails />} />
					<Route path='/movies/delete/:id' element={<MovieDelete />} />
					<Route path='/list' element={<MoviesList />} />
					<Route path='/add' element={<AddMovies />} />
				</Routes>
			</Suspense>
			
		</div>
	);
}

export default App