import './slider.scss';
import { ReactComponent as ArrowLeft } from '../../assets/chevron_slider_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/chevron_slider_right.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Slider({ imageSlider, imageAlt }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		// For 5 slides, index 0 to 4 => ( ( 4 + 1 ) = 5 ) % 5
		// --> remainder is 0 --> set current index to 0
		setCurrentIndex((currentIndex + 1) % imageSlider.length);
	};

	const prevSlide = () => {
		// For 5 slides, index 0 to 4 => ( ( 0 - 1 ) + 5 = 4 ) % 5
		// --> remainder is 4 --> set current index to 4
		setCurrentIndex((currentIndex - 1 + imageSlider.length) % imageSlider.length);
	};

	return (
		<div className='slider'>
			<img src={imageSlider[currentIndex]} className='slider__image' alt={`${imageAlt.replace(/ /g, '_')}_slider_image`} />
			{imageSlider.length > 1 && (
				<>
					<ArrowLeft className='slider__arrow slider__arrow--backward' aria-label='Previous slide' onClick={prevSlide} />
					<ArrowRight className='slider__arrow slider__arrow--forward' aria-label='Next slide' onClick={nextSlide} />
					<p className='slideCount'>
						{currentIndex + 1} / {imageSlider.length}
					</p>
				</>
			)}
		</div>
	);
}

Slider.propTypes = {
	imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
	imageAlt: PropTypes.string.isRequired,
};

export default Slider;
