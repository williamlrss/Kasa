import './slider.scss';
import ArrowRight from '../../assets/chevron_carousel_right.png';
import ArrowLeft from '../../assets/chevron_carousel_left.png';
import { useState } from 'react';

export default function Slider({ imageSlider }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((currentIndex + 1) % imageSlider.length);
	};

	const prevSlide = () => {
		setCurrentIndex((currentIndex - 1 + imageSlider.length) % imageSlider.length);
	};

	return (
		<section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='slider'>
			{imageSlider.length > 1 && (
				<>
					<img className='slider__arrow slider__arrow--backward' src={ArrowLeft} alt='icon_arrow_backward' onClick={prevSlide} />
					{/* IoIosArrowBack */}
					<img className='slider__arrow slider__arrow--forward' src={ArrowRight} alt='icon_arrow_forward' onClick={nextSlide} />
					{/* IoIosArrowForward */}

					<p className='slideCount'>
						{currentIndex + 1} / {imageSlider.length}
					</p>
				</>
			)}
		</section>
	);
}
