import './banner.scss';
import { useLocation } from 'react-router-dom';
import BannerImage from '../../assets/banner_kasa.png';
import BannerImageAbout from '../../assets/banner_kasa_about.png';

export default function Banner() {
	const location = useLocation();
	const aboutPage = location.pathname === '/about';

	const bannerClass = aboutPage ? 'banner--about' : 'banner--main';
	const bannerImgClass = aboutPage ? 'banner--about__img' : 'banner--main__img';
	const bannerImg = aboutPage ? BannerImageAbout : BannerImage;

	return (
		<section className={bannerClass}>
			<img className={bannerImgClass} src={bannerImg} alt='banner_kasa' />
			{!aboutPage && <h1 className='banner--main__title'>Chez vous, partout et ailleurs</h1>}
		</section>
	);
}
