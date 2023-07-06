import './header.scss';
import Logo from '../../assets/logo_kasa.png';
import Navbar from '../navbar/navbar';

export default function Header() {
	return (
		<header className='header'>
			<img className='header__logo' src={Logo} alt='logo_kasa' />
			<Navbar />
		</header>
	);
}
