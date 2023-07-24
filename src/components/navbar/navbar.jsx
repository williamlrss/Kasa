import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(() => (location.pathname === '/' || location.pathname === '/kasa' ? '/kasa' : location.pathname));

	const navLinks = [
		{ name: 'Home', path: '/kasa' },
		{ name: 'À propos', path: '/about' },
	];

	useEffect(() => {
		setActiveLink(location.pathname === '/' || location.pathname === '/kasa' ? '/kasa' : location.pathname);
	}, [location]);

	return (
		<nav>
			<ul className='nav-list'>
				{navLinks.map((link) => (
					<li key={link.path}>
						<Link to={link.path} className={`nav-list__item ${activeLink === link.path ? 'nav-list__item--active' : ''}`}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
