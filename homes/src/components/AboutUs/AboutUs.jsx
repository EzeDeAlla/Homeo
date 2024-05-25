import React from "react";
import home2 from '../../assets/images/home2.png';
import home3 from '../../assets/images/dots.svg';
import home4 from '../../assets/images/home4.png';
import { HiOutlinePlay } from 'react-icons/hi2'

const AboutUs = () => {

    return(
        <div className="todo">
            
    <div id="facts" className="pt-20 video-counter">
        <div className="aboutPosition">
            <div className="aboutRow">
                <div className="w-full lg:w-1/2">
                    <div className="relative pb-8 mt-12 video-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img className="absolute bottom-0 left-0 -ml-8 dots" src={home3} alt="dots" />
                        <div className="relative mr-6 rounded-lg shadow-md video-wrapper">
                            <div className="video-image">
                                <img src={home2} alt="video" className=""/>
                            </div>
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-25 rounded-lg video-icon">
                                <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup"><HiOutlinePlay className="text-2xl ml-1"/></a>
                            </div>
                        </div> 
                    </div> 
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="counter-content">
                            <div className="mb-8 section-title">
                                <div className="line"></div>
                                <h3 className="title">About <span>Us</span></h3>
                            </div>
                            <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div> 
                        <div className="aboutRow no-gutters">
                            <div className="flex items-center justify-center single-counter counter-color-1">
                                <div className="text-center counter-items">
                                    <span className="text-2xl font-bold text-white"><span className="counter">125</span>K</span>
                                    <p className="text-white">Properties</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center single-counter counter-color-2">
                                <div className="text-center counter-items">
                                    <span className="text-2xl font-bold text-white"><span className="counter">87</span>K</span>
                                    <p className="text-white">Clients</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center single-counter counter-color-3">
                                <div className="text-center counter-items">
                                    <span className="text-2xl font-bold text-white"><span className="counter">4.8</span></span>
                                    <p className="text-white">User Rating</p>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </div>
    

        <div id="about" className="relative pt-20 about-area">
        <div className="aboutPosition">
            <div className="aboutRow">
                <div className="w-full lg:w-1/2">
                    <div className="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="mb-4 section-title">
                            <div className="line"></div>
                            <h3 className="title">Why <span>Us</span></h3>
                        </div> 
                        <p className="mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <a href="javascript:void(0)" className="main-btn gradient-btn">Try it Free</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src={home2} alt="about" />
                    </div> 
                </div>
            </div>
        </div> 
        <div className="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape" />
        </div>
    </div>
  
    <div className="relative pt-20 about-area">
        <div className="about-shape-2">
            <img src="assets/images/about-shape-2.svg" alt="shape" />
        </div>
        <div className="aboutPosition">
            <div className="aboutRow">
                <div className="w-full lg:w-1/2 lg:order-last">
                    <div className="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="mb-4 section-title">
                            <div className="line"></div>
                            <h3 className="title">Our <span>Properties</span></h3>
                        </div> 
                        <p className="mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <a href="javascript:void(0)" className="main-btn gradient-btn">Try it Free</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-first">
                    <div className="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src={home4} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default AboutUs;