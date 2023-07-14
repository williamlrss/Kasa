import Home from './pages/home/home';
// import NotFound from './pages/notFound/NotFound';
// import About from './pages/about/About';
import Accommodation from './pages/accommodation/accommodation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Navigate to='/Kasa' />} />
				<Route path='/Kasa/' element={<Home />} />
				<Route path='/accommodation/:id' element={<Accommodation />} />
				{/*<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
