import './home.scss';
// import '../../sass/main.scss';
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';

export default function Home() {
	return (
		<>
			<home-page className='main'>
				<Banner></Banner>
				<Gallery></Gallery>
			</home-page>
		</>
	);
}
