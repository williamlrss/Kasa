import './home.scss';
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';

export default function Home() {
	return (
		<main className='home-page'>
			<Banner />
			<Gallery />
		</main>
	);
}
