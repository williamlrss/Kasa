import './accommodation.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from '../../components/slider/slider';
import Collapse from '../../components/collapse/collapse';
import { ReactComponent as GreyStar } from '../../assets/grey_star.svg';
import { ReactComponent as RedStar } from '../../assets/red_star.svg';
import NotFound from '../notFound/notFound';

export default function Accommodation() {
	const navigate = useNavigate();
	const [dataCurrentAccommodation, setDataCurrentAccommodation] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const { id: idAccommodation } = useParams();

	useEffect(() => {
		fetch(process.env.REACT_APP_DATA_ACCOMMODATION)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				const currentAccommodation = data.find((data) => String(data.id) === idAccommodation);
				if (currentAccommodation) {
					setDataCurrentAccommodation(currentAccommodation);
					setIsLoading(false);
				} else {
					setError(true);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				setError('Fetch error: ' + error.message);
				setIsLoading(false);
			});
	}, [idAccommodation, navigate]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <NotFound />;
	}

	const name = dataCurrentAccommodation.host.name.split(' ');
	const rating = dataCurrentAccommodation.rating;
	const description = dataCurrentAccommodation.description;
	const equipments = dataCurrentAccommodation.equipments;

	return (
		<main className='accommodation-page'>
			<Slider imageSlider={dataCurrentAccommodation.pictures || []} imageAlt={dataCurrentAccommodation.title} />
			<article className='content'>
				<accommodation-heading className='accommodation-heading'>
					<h1 className='accommodation-heading__title'>{dataCurrentAccommodation.title}</h1>
					<p className='accommodation-heading__location'>{dataCurrentAccommodation.location}</p>
					<div className='accommodation-heading-tags'>
						{dataCurrentAccommodation.tags.map((tag, index) => {
							return (
								<button className='accommodation-heading-tags__item' key={index}>
									{tag}
								</button>
							);
						})}
					</div>
				</accommodation-heading>
				<host-and-rating className='host-and-rating'>
					<div className='host-and-rating__rating'>
						{[...Array(5)].map((star, index) => {
							const ratingValue = index + 1;
							return (
								<div className='host-and-rating__rating__item' key={index}>
									{ratingValue <= rating ? <RedStar /> : <GreyStar />}
								</div>
							);
						})}
					</div>
					<figure className='host-and-rating__host'>
						<figcaption className='host-and-rating__host-name'>
							<p className='host-and-rating__host-name__text'>{name[0]}</p>
							<p className='host-and-rating__host-name__text'>{name[1]}</p>
						</figcaption>
						<img className='host-and-rating__host__picture' src={dataCurrentAccommodation.host.picture} alt='host_profile_picture' />
					</figure>
				</host-and-rating>
			</article>
			<div className='content-collapse'>
				<Collapse title={'Description'} content={description} />
				<Collapse
					title={'Équipements'}
					content={equipments.map((equipment, index) => (
						<p key={index}>{equipment}</p>
					))}
				/>
			</div>
		</main>
	);
}
