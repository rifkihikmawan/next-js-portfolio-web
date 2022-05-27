import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portfolio</h1>
                        <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <div className='portfolio-wrapper'>
                            <div className='portfolio-item'>
                                <img src='/portfolio/1.webp' className='portfolio-image' />

                                <h4 className='portfolio-name'>Finance App - Mobile app</h4>
                                <div className='portfolio-category'>Mobile app</div>
                            </div>

                            <div className='portfolio-item'>
                                <img src='/portfolio/2.webp' className='portfolio-image' />

                                <h4 className='portfolio-name'>Banking app - Mobile app</h4>
                                <div className='portfolio-category'>Mobile app</div>
                            </div>

                            <div className='portfolio-item'>
                                <img src='/portfolio/3.webp' className='portfolio-image' />

                                <h4 className='portfolio-name'>Sport app - Mobile app</h4>
                                <div className='portfolio-category'>Mobile app</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;