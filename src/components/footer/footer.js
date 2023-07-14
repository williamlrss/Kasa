import './footer.scss';
import LogoBw from '../../assets/logo_kasa_bw.png';

export default function footer() {
	return (
		<footer className='footer'>
			<img className='footer__logo' src={LogoBw} alt='logo_kasa_black_and_white' />
			<p className='footer__text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
