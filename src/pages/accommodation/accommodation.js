import './accommodation.scss'; // IF EMPTY REPLACE PER MAIN
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider';
import Footer from '../../components/footer/footer';
import Collapse from '../../components/dropDownEl/dropDownEl';
import { ReactComponent as GreyStar } from '../../assets/grey_star.svg';
import { ReactComponent as RedStar } from '../../assets/red_star.svg';

export default function Accommodation() {
	const [dataCurrentAccommodation, setDataCurrentAccommodation] = useState({});

	const { id: idAccommodation } = useParams();

	useEffect(() => {
		fetch('http://localhost:3000/accommodation.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				const currentAccommodation = data.find((data) => data.id === idAccommodation);
				setDataCurrentAccommodation(currentAccommodation || {});
			})
			.catch((error) => console.error(`Fetch error: ${error}`));
	}, [idAccommodation]);

	if (!dataCurrentAccommodation.host) {
		return null;
	}

	const name = dataCurrentAccommodation.host.name.split(' ');
	const rating = dataCurrentAccommodation.rating;
	const description = dataCurrentAccommodation[0].description;
	console.log(description);
	const equipments = dataCurrentAccommodation[0].equipments;

	console.log(rating);
	console.log(RedStar, GreyStar);
	return (
		<div className='main-pages'>
			<Header />
			<Slider imageSlider={dataCurrentAccommodation.pictures || []} />
			<main className='accommodation'>
				<div className='content'>
					<div className='content-heading'>
						<h1 className='content-heading__title'>{dataCurrentAccommodation.title}</h1>
						<p className='content-heading__location'>{dataCurrentAccommodation.location}</p>
						<div className='content-heading-tags'>
							{dataCurrentAccommodation.tags.map((tag, index) => {
								return (
									<button className='content-heading-tags__item' key={index}>
										{tag}
									</button>
								);
							})}
						</div>
					</div>
					<div className='content-aside'>
						<div className='content-aside-rating'>
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<div className='content-aside-rating__item' data-key={index}>
										{ratingValue <= rating ? <RedStar /> : <GreyStar />}
									</div>
								);
							})}
						</div>
						<div className='content-aside-host'>
							<div className='content-aside-host-name'>
								<p className='content-aside-host-name__text'>{name[0]}</p>
								<p className='content-aside-host-name__text'>{name[1]}</p>
							</div>
							<img className='content-aside-host__picture' src={dataCurrentAccommodation.host.picture} alt='host_profile_picture' />
						</div>
					</div>
				</div>
				<div className='accomodation_collapse'>
					<div className='accomodation_collapse_item'>
						<Collapse title={'Description'} content={description} />
					</div>
					<div className='accomodation_collapse_item'>
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
