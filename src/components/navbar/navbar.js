import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
	const location = useLocation();

	const getNavClass = (path) => {
		return location.pathname === path ? 'nav-list-li-active' : 'nav-list-li';
	};

	return (
		<nav>
			<ul className='nav-list'>
				<li className={getNavClass('/Kasa/')}>
					<Link className='nav-list-li__item nav-list-li__item--home' to='/Kasa/'>
						Accueil
					</Link>
				</li>
				<li className={getNavClass('/about')}>
					<Link className='nav-list-li__item' to='/about'>
						A propos
					</Link>
				</li>
			</ul>
		</nav>
	);
}
