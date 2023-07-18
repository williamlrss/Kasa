import './banner.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BannerImage from '../../assets/banner_kasa.png';
import BannerImageAbout from '../../assets/banner_kasa_about.png';

export default function Banner() {
	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setAboutPage(location.pathname === '/about');
	}, [location]);

	return (
		<banner-main className={aboutPage ? 'banner--about' : 'banner'}>
			<img className='banner__img' src={aboutPage ? BannerImageAbout : BannerImage} alt='banner_kasa' />
			{!aboutPage && <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>}
		</banner-main>
	);
}
