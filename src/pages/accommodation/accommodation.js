import './accommodation.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from '../../components/slider/slider';
import DropDownEl from '../../components/dropDownEl/dropDownEl';
import { ReactComponent as GreyStar } from '../../assets/grey_star.svg';
import { ReactComponent as RedStar } from '../../assets/red_star.svg';

export default function Accommodation() {
	const [dataCurrentAccommodation, setDataCurrentAccommodation] = useState({});
	const [error, setError] = useState(false);

	const { id: idAccommodation } = useParams();
	const navigate = useNavigate();

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
				if (currentAccommodation) {
					setDataCurrentAccommodation(currentAccommodation);
				} else {
					setError(true);
				}
			})
			.catch((error) => {
				console.error(`Fetch error: ${error}`);
				setError(true);
			});
	}, [idAccommodation]);

	if (error) {
		navigate('*');
	}
	// if (!dataCurrentAccommodation.host) {
	// 	return null;
	// 	// return <NotFound />;
	// }

	const name = dataCurrentAccommodation.host.name.split(' ');
	const rating = dataCurrentAccommodation.rating;
	const description = dataCurrentAccommodation.description;
	const equipments = dataCurrentAccommodation.equipments;
	return (
		<div className='main-pages'>
			<Slider imageSlider={dataCurrentAccommodation.pictures || []} />
			<article className='content'>
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
			</article>
			<div className='content-dropDownEls'>
				<DropDownEl title={'Description'} content={[`${description}`]} />
				<DropDownEl title={'Équipements'} content={equipments} />
			</div>
		</div>
	);
}

/* <main className='main-pages'>
  <Slider imageSlider={dataCurrentAccommodation.pictures || []} />
  <article className='content'>
    <header className='content-heading'>
      <h1 className='content-heading__title'>{dataCurrentAccommodation.title}</h1>
      <p className='content-heading__location'>{dataCurrentAccommodation.location}</p>
      <div className='content-heading-tags'>
        {dataCurrentAccommodation.tags.map((tag, index) => (
          <button className='content-heading-tags__item' key={index}>
            {tag}
          </button>
        ))}
      </div>
    </header>
    <aside className='content-aside'>
      <RatingStar rating={rating} />
      <figure className='content-aside-host'>
        <figcaption className='content-aside-host-name'>
          <p className='content-aside-host-name__text'>{name[0]}</p>
          <p className='content-aside-host-name__text'>{name[1]}</p>
        </figcaption>
        <img className='content-aside-host__picture' src={dataCurrentAccommodation.host.picture} alt='host_profile_picture' />
      </figure>
    </aside>
  </article>
  <div className='content-dropDownEls'>
    <DropDownEl title={'Description'} content={[`${description}`]} />
    <DropDownEl title={'Équipements'} content={equipments} />
  </div>
</main>
<Footer /> */
