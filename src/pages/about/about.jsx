import './about.scss';
import { useState, useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';

export default function About() {
	const [aboutDatas, setAboutDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(process.env.REACT_APP_DATA_ABOUT, {
					headers: {
						Accept: 'application/json',
					},
				});
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setAboutDatas(data);
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <h1>Oops! Something went wrong, please try again later.</h1>;
	}

	return (
		<main className='about main-pages'>
			<Banner />
			<div className='about-content'>
				{aboutDatas.map((data) => (
					<Collapse key={data.id} title={data.title} content={data.content} />
				))}
			</div>
		</main>
	);
}
