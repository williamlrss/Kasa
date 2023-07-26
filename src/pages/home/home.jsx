import './home.scss';
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';
import ErrorBoundary from '../../ErrorBoundary';

export default function Home() {
	return (
		<main className='home-page'>
			<Banner />
			<ErrorBoundary>
				<Gallery />
			</ErrorBoundary>
		</main>
	);
}
