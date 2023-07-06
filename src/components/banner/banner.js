import './banner.scss';
import BannerImage from '../../assets/banner_kasa.png';

export default function Banner() {
	return (
		<div className='banner'>
			<img className='banner__img' src={BannerImage} alt='banner_kasa' />
			<div className='banner__title'>
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
		</div>
	);
}
