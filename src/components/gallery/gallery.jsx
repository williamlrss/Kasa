import './gallery.scss';
import React, { useState, useEffect } from 'react';
import Card from '../card/card';

const Gallery = () => {
	const [accommodations, setAccommodations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			try {
				const response = await fetch(process.env.REACT_APP_DATA_ACCOMMODATION, {
					headers: {
						Accept: 'application/json',
					},
				});

				if (!response.ok) {
					throw new Error(`Network response was not ok, status: ${response.status}`);
				}

				const data = await response.json();

				if (isMounted) {
					setAccommodations(data);
					setIsLoading(false);
				}
			} catch (error) {
				console.error(`Fetch error: ${error.message}`); // log the error for debugging
				if (isMounted) {
					setError(true);
					setIsLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <h1>Oops! Something went wrong, please try again later.</h1>;
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
