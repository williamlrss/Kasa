import './footer.scss';
import LogoBw from '../../assets/logo_kasa_bw.png';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<img className='footer__logo' src={LogoBw} alt='logo_kasa_black_and_white' />
			<p className='footer__text'>© {currentYear} Kasa. All rights reserved</p>
		</footer>
	);
}
