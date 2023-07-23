import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ id, title, cover, altText }) => {
	return (
		<Link to={`/accommodation/${id}`} className='card'>
			<img className='card__img' src={cover} alt={altText ? altText : title} />
			{title && <h3 className='card__title'>{title}</h3>}
		</Link>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	cover: PropTypes.string.isRequired,
	altText: PropTypes.string,
};

export default Card;
