import './gallery.scss';
import React from 'react';
import accommodations from '../../data/accomodation.json';
import Card from './../card/card';

const Gallery = () => {
	return (
		<div className='gallery'>
			{accommodations.map((accommodation) => (
				<Card key={accommodation.id} {...accommodation} />
			))}
		</div>
	);
};

export default Gallery;
