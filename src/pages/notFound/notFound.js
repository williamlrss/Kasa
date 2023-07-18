import './notFound.scss';
import Loading from '../../utils/loading/loading';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/', {});
		}, 2000);
	});
	return (
		<notfound-page>
			<notfound-heading>
				<h1 className='notFound-heading__title'>404</h1>
				<p className='notFound-heading__text'>Oups! La page que vous recherchez n'existe pas.</p>
				<Loading />
			</notfound-heading>
			<Link className='notFound-homeLink' to='/'>
				<p className='notFound-homeLink__text'>Retourner sur la page d'accueil</p>
			</Link>
		</notfound-page>
	);
}
