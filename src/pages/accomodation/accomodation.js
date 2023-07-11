import './accomodation.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import datas from '../../data/accomodation.json';
import Header from '../../components/header/header';
import Slider from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
// import Collapse from '../../components/collapse/collapse';
// import greyStar from '../../assets/grey_star.png';
// import redStar from '../../assets/red_star.png';

export default function Accomodation() {
	const [dataCurrentAccomodation, setDataCurrentAccomodation] = useState({});

	const { id: idAccomodation } = useParams();

	useEffect(() => {
		fetch('http://localhost:3000/accomodation.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				const currentAccomodation = data.find((data) => data.id === idAccomodation);
				setDataCurrentAccomodation(currentAccomodation || {});
			})
			.catch((error) => console.error(`Fetch error: ${error}`));
	}, [idAccomodation]);

	console.log(dataCurrentAccomodation, dataCurrentAccomodation.host);
	if (!dataCurrentAccomodation.host) {
		return null;
	}

	const name = dataCurrentAccomodation.host.name.split(' ');
	// const rating = dataCurrentAccomodation.rating;

	return (
		<>
			<Header />
			<Slider imageSlider={dataCurrentAccomodation.pictures || []} />
			<main className='accomodation'>
				<div className='accomodation_content'>
					<div className='accomodation_content_infos'>
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							{dataCurrentAccomodation.tags.map((tag, index) => {
								return <button key={index}>{tag}</button>;
							})}
						</div>
					</div>
					<div className='accomodation_content_host'>
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation.host.picture} alt='host of this accomodation' />
						</div>

						{/* <div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div> */}
					</div>
				</div>
				{/* <div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={dataCurrentAccomodation.description} />
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={dataCurrentAccomodation.equipments}/>
					</div>
				</div> */}
			</main>
			<Footer />
		</>
	);
}
