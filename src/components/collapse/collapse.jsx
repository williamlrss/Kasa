import './collapse.scss';
import arrow from '../../assets/arrow.svg';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse({ title, content }) {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='collapse'>
			<button className='collapse__button' onClick={() => setToggle((prevToggle) => !prevToggle)}>
				<h3 className='collapse__button-title'>{title}</h3>
				<img className='collapse__button-arrow' style={{ transform: toggle ? 'scaleY(-1)' : 'scaleY(1)' }} src={arrow} alt='show content' />
			</button>
			<div className={toggle ? 'collapse__content' : 'collapse__content--hidden'}>
				<p className='collapse__content-text'>{content}</p>
			</div>
		</div>
	);
}

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
