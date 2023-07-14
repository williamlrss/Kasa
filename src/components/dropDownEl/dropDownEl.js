import '../dropDownEl/dropDownEl.scss';
import arrow from '../../assets/arrow.svg'; // Assuming you replaced PNG with SVG
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse({ title, content }) {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='collapse'>
			<button className='collapse_title' onClick={() => setToggle((prevToggle) => !prevToggle)}>
				<h3>{title}</h3>
				<img className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt='show content' />
			</button>
			<div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
				{content.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
}

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
