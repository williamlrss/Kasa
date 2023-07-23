import './header.scss';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Logo from '../logo/logo';

export default function Header() {
	return (
		<header className='header'>
			<Link className='logo' to='/kasa'>
				<Logo />
			</Link>
			<Navbar />
		</header>
	);
}
