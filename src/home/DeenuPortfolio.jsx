import React from 'react'
import ScrollToTop from 'react-scroll-up';
import TextLoop from "react-text-loop";
import Foooter from "../component/footer/Foooter";
import { FiChevronUp} from "react-icons/fi";
import TabThree from "../elements/tab/TabThree";
import Helmet from "../component/common/Helmet";
import TabTwo from "../elements/tab/TabTwo";
import Contact from "../elements/contact/Contact";
import Header from "../component/header/Header";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: 'read'
    }
]

const DeenuPortfolio = () => {
  let title = 'About Me',
      description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    return (
        <div>
          {/* Page title */}
          <Helmet pageTitle="Deenu's Portfolio Landing" />

          {/* Navbar */}
          <Header homeLink="/" logo="symbol-dark" color="color-black"/>

          <div className="slider-wrapper">
            {/* Start Single Slide */}
            {SlideList.map((value , index) => (
                <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="designer-thumbnail">
                                    <img src="/assets/images/about/deenu-profile.jpg" alt="Slider Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 mt_md--40 mt_sm--40">
                                <div className={`inner ${value.textPosition}`}>
                                    {value.category ? <span>{value.category}</span> : ''}
                                    <h1 className="title">Hi, I’m Deenu Gengiti <br/>
                                    <TextLoop>
                                        <span> Product Manager.</span>
                                        <span> Full Stack Developer.</span>
                                        <span> ML Engineer.</span>
                                    </TextLoop>{" "}
                                    </h1>
                                    <h2>based in Toronto.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
                {/* End Single Slide */}
            </div>

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* Start Designer Portfolio  */}
            <div className="designer-portfolio-area ptb--120 bg_color--1">
                <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                    <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
                </div>
            </div>
            {/* End Designer Portfolio  */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
              <div className="rn-contact-area ptb--120 bg_color--1">
                <Contact />
              </div>
            </div>
            {/* End COntact Area */}

            {/* Start Footer Style  */}
            <Foooter />
            {/* End Footer Style  */}
            
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default DeenuPortfolio
