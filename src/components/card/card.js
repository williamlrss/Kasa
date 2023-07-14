import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ id, title = 'Cover Image', cover }) => {
	return (
		<Link to={`/accommodation/${id}`} className='gallery__card'>
			<img className='gallery__card-img' src={cover} alt={title} />
			<h3 className='gallery__card-title'>{title}</h3>
		</Link>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
};

export default Card;
