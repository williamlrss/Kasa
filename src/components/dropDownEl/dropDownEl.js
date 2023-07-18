import '../dropDownEl/dropDownEl.scss';
import arrow from '../../assets/arrow.svg'; // Assuming you replaced PNG with SVG
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function DropDownEl({ title, content }) {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='dropDownEl'>
			<button className='dropDownEl-button' onClick={() => setToggle((prevToggle) => !prevToggle)}>
				<h3 className='dropDownEl-button__title'>{title}</h3>
				<img
					className={toggle ? 'dropDownEl-button__arrow dropDownEl-button__arrow--up' : 'dropDownEl-button__arrow dropDownEl-button__arrow--down'}
					src={arrow}
					alt='show content'
				/>
			</button>
			<div className={toggle ? 'dropDownEl-content' : 'dropDownEl-content--hidden'}>
				{content.map((item, index) => (
					<p className='dropDownEl-content__text' key={index}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
}

DropDownEl.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
