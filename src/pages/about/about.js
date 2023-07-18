import './about.scss';
import { useState, useEffect } from 'react';
import Banner from '../../components/banner/banner';
import DropDownEl from '../../components/dropDownEl/dropDownEl';

export default function About() {
	const [aboutDatas, setAboutDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/about.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setAboutDatas(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<main className='about main-pages'>
				<Banner />
				{aboutDatas.map((data) => {
					return <DropDownEl key={data.id} title={data.title} content={[`${data.content}`]} />;
				})}
			</main>
		</>
	);
}
