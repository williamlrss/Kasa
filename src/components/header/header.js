import './header.scss';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

import { ReactComponent as LogoK } from '../../assets/kasa_logo_letter_k.svg';
import { ReactComponent as LogoHome } from '../../assets/kasa_logo_home.svg';
import { ReactComponent as LogoDoor } from '../../assets/kasa_logo_home_door.svg';
import { ReactComponent as LogoS } from '../../assets/kasa_logo_letter_s.svg';
import { ReactComponent as LogoA } from '../../assets/kasa_logo_letter_a.svg';

export default function Header() {
	return (
		<header className='header'>
			<Link className='header-logo' to='/'>
				<LogoK className='header-logo__item' />
				<div className='header-logo__item'>
					<LogoHome className='header-logo__item--home' />
					<LogoDoor className='header-logo__item--door' />
				</div>
				<LogoS className='header-logo__item header-logo__item--small' />
				<LogoA className='header-logo__item header-logo__item--small' />
			</Link>
			<Navbar />
		</header>
	);
}
