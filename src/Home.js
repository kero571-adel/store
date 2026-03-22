import './home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Shop from './Shop';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <>
            <Helmet>
                {/* Preloading الصور المهمة */}
                <link rel="preload" as="image" href="/images/slide-01.webp" />
                <link rel="preload" as="image" href="/images/slide-02.webp" />
                <link rel="preload" as="image" href="/images/slide-03.webp" />
            </Helmet>

            <div className="home">
                {/* الكاروسيل */}
                <Carousel data-bs-theme="dark" id="homeCarousel">
                    <Carousel.Item style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src="/images/slide-01.webp"
                            alt="First slide"
                            loading="eager" // نخليه eager لأنه يظهر أول ما تفتح الصفحة
                        />
                        <div className="decInCarouselItem">
                            <div>women new collection</div>
                            <div>NEW SEASON</div>
                            <Link to="/shop">
                                <Button>Shop now</Button>
                            </Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src="/images/slide-02.webp"
                            alt="Second slide"
                            loading="lazy"
                        />
                        <div className="decInCarouselItem">
                            <div>men new-season</div>
                            <div>Jacket & Coats</div>
                            <Link to="/shop">
                                <Button>Shop now</Button>
                            </Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src="/images/slide-03.webp"
                            alt="Third slide"
                            loading="lazy"
                        />
                        <div className="decInCarouselItem">
                            <div>men new collection</div>
                            <div>NEW SEASON</div>
                            <Link to="/shop">
                                <Button>Shop now</Button>
                            </Link>
                        </div>
                    </Carousel.Item>
                </Carousel>

                {/* محتوى الصفحة */}
                <div className="homecontent">
                    <div className="banner">
                        <div>
                            <div>Women</div>
                            <div>Spring 2025</div>
                            <Link to="/shop">
                                <button>Shop Now</button>
                            </Link>
                        </div>
                        <div>
                            <div>Men</div>
                            <div>Spring 2025</div>
                            <Link to="/shop">
                                <button>Shop Now</button>
                            </Link>
                        </div>
                        <div>
                            <div>Accessories</div>
                            <div>Spring 2025</div>
                            <Link to="/shop">
                                <button>Shop Now</button>
                            </Link>
                        </div>
                    </div>

                    <h1><b>Product Overview</b></h1>
                    <Shop />
                </div>
            </div>
        </>
    );
}