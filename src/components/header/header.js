import './header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_kasa.png';
import Navbar from '../navbar/navbar';

export default function Header() {
	return (
		<header className='header'>
			<Link to='/'>
				<img className='header__logo' src={Logo} alt='logo_kasa' />
			</Link>
			<Navbar />
		</header>
	);
}
