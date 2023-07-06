import Home from './pages/home';
// import NotFound from './pages/notFound/NotFound';
// import About from './pages/about/About';
// import Accomodation from './pages/accomodation/Accomodation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Navigate to='/Kasa' />} />
				<Route path='/Kasa/' element={<Home />} />
				{/* <Route path='/accomodation/:id' element={<Accomodation />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
