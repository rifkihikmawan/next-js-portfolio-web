import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact</h1>
                        <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <ul className='contact-links'>
                            <li className='contact-item'>Email : rifkihikmawan18@gmail.com</li>
                            <li className='contact-item'>Phone : +6281213872508</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;