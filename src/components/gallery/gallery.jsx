import './gallery.scss';
import React, { useState, useEffect } from 'react';
import Card from '../card/card';

const Gallery = () => {
	const [accommodations, setAccommodations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(process.env.REACT_APP_DATA_ACCOMMODATION)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setAccommodations(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(`Fetch error: ${error}`);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className='gallery'>
			{accommodations.map((accommodation) => (
				<Card key={accommodation.id} {...accommodation} />
			))}
		</div>
	);
};

export default Gallery;