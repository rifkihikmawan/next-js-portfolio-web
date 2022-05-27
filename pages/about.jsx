import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<Navbar />
			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Profile</h1>
						<p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;