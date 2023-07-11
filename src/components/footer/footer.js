import './footer.scss';
import LogoBw from '../../assets/logo_kasa_bw.png';

export default function footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<img className='footer__container-logo' src={LogoBw} alt='logo_kasa_black_and_white' />
			</div>
			<p className='footer-text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
