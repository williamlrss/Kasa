import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(() => (location.pathname === '/' || location.pathname === '/kasa' ? '/kasa' : location.pathname));

	const navLinks = [
		{ name: 'Home', path: '/kasa' },
		{ name: 'About', path: '/about' },
	];

	useEffect(() => {
		setActiveLink(location.pathname === '/' || location.pathname === '/kasa' ? '/kasa' : location.pathname);
	}, [location]);

	return (
		<nav>
			<ul className='nav-list'>
				{navLinks.map((link, index) => (
					<li key={index}>
						<Link to={link.path} className={`nav-list__item ${activeLink === link.path ? 'nav-list__item--active' : ''}`}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
			{/* <ul className='test'>
				<li>
					<Link className='test__font--1'>Home--1</Link>
					<Link className='test__font--2'>About--2</Link>
				</li>
			</ul> */}
		</nav>
	);
}

export default Navbar;
