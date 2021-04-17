import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SlidePage.css';
import './SlideResponsive.css';
import slide1 from '../image/slide/slide1.jpg';
import slide2 from '../image/slide/slide2.jpg';
import slide3 from '../image/slide/slide3.jpg';
import slide4 from '../image/slide/slide4.jpg';
import slide5 from '../image/slide/slide5.jpg';
import slide6 from '../image/slide/slide6.jpg';

const SlidePage = () => {
    return (
        <>
            <div className="slidePage-area">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide2}
                        alt="Second slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide3}
                        alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide4}
                        alt="Forth slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide5}
                        alt="Fifth slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1000}>
                        <img
                        className="d-block slide-width image-size"
                        src={slide6}
                        alt="Sixth slide"
                        />
                        <Carousel.Caption className="carousel-tag">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, mollitia.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat placeat qui explicabo repellendus ipsum architecto corrupti recusandae tempora obcaecati aperiam?</p>
                            <button className="btn-slide">BUY NOW</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default SlidePage;