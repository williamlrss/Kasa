import './gallery.scss';
import React, { useState, useEffect } from 'react';
import Card from './../card/card';

const Gallery = () => {
	const [accommodations, setAccommodations] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/accommodation.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => setAccommodations(data))
			.catch((error) => console.error(`Fetch error: ${error}`));
	}, []);

	return (
		<div className='gallery'>
			{accommodations.map((accommodation) => (
				<Card key={accommodation.id} {...accommodation} />
			))}
		</div>
	);
};

export default Gallery;
