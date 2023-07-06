import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
	const location = useLocation();

	const getNavClass = (path) => {
		return location.pathname === path ? 'nav__list__item-active' : 'nav__list__item';
	};

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className={getNavClass('/Kasa/')}>
					<Link to='/Kasa/'>Accueil</Link>
				</li>
				<li className={getNavClass('/about')}>
					<Link to='/about'>A propos</Link>
				</li>
			</ul>
		</nav>
	);
}
