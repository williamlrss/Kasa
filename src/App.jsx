import './app.scss';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import About from './pages/about/about';
import Accommodation from './pages/accommodation/accommodation';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<Router>
			<app-router>
				<Header />
				<Routes>
					<Route path='/' element={<Navigate to='/Kasa' />} />
					<Route path='/Kasa/' element={<Home />} />
					<Route path='/accommodation/:id' element={<Accommodation />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</app-router>
		</Router>
	);
}

export default App;
