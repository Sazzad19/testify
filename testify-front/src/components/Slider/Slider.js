import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/1.avif';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.webp';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider'>
            <Carousel>
            <div >
                    <img src={img1} alt="" />
                    <div className='slider-text'>
                    <h1>Learn React js</h1>
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                    </div>
                   
                </div>
                <div>
                    <img src={img2} alt="" />
                    <div className='slider-text'>
                    <h1>JavaScript</h1>
                    <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <div className='slider-text'>
                    <h1>GitHub</h1>
                    <p>GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;