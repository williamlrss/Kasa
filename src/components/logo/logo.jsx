import './logo.scss';
import { ReactComponent as LogoK } from '../../assets/kasa_logo_letter_k.svg';
import { ReactComponent as LogoHome } from '../../assets/kasa_logo_home.svg';
import { ReactComponent as LogoDoor } from '../../assets/kasa_logo_home_door.svg';
import { ReactComponent as LogoS } from '../../assets/kasa_logo_letter_s.svg';
import { ReactComponent as LogoA } from '../../assets/kasa_logo_letter_a.svg';

export default function Logo() {
	return (
		<>
			<LogoK className='logo__item' />
			<LogoHome className='logo__item logo__item--home' />
			<LogoDoor className='logo__item--door' />
			<LogoS className='logo__item logo__item--small' />
			<LogoA className='logo__item logo__item--small' />
		</>
	);
}
