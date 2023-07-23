import './notFound.scss';
import Redirecting from '../../utils/redirecting/redirecting';
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
		<main className='notFound'>
			<section className='notFound-heading'>
				<h1 className='notFound-heading__title'>404</h1>
				<p className='notFound-heading__text'>Oups! La page que vous recherchez n'existe pas.</p>
				<Redirecting />
			</section>
			<Link className='notFound-homeLink' to='/'>
				<p className='notFound-homeLink__text'>Retourner sur la page d'accueil</p>
			</Link>
		</main>
	);
}
