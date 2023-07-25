import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
	const location = useLocation();

	const navLinks = [
		{ name: 'Home', path: '/kasa' },
		{ name: 'À propos', path: '/about' },
	];

	return (
		<nav>
			<ul className='nav-list'>
				{navLinks.map((link) => (
					<li key={link.path}>
						<Link
							to={link.path}
							className={`nav-list__item ${
								location.pathname === link.path || (location.pathname === '/' && link.path === '/kasa') ? 'nav-list__item--active' : ''
							}`}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
