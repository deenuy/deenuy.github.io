import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
			image: '01',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
			category: 'Full-stack Development',
			title: 'Google Book Store (React App)',
			github: 'https://github.com/deenuy/MERN-stack-google-books-store'
    },
    {
			image: '02',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
			category: 'Full-stack Development',
			title: 'ePet Shop (React App)',
			github: 'https://github.com/deenuy/uoft-mern-stack-ePet-shop-app'
		},
		{
			image: '03',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
			category: 'Machine Learning',
			title: 'Covid19 Twitter Sentiment Analysis',
			github: ''
		},
    {
			image: '04',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
			category: 'Full-stack Development',
			title: 'Grid Search & Sort (React App)',
			github: 'https://github.com/deenuy/UofT-react-emp-directory'
    },
    {
			image: '05',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
			category: 'Full-stack Development',
			title: 'Discover Stocks (Frontend App)',
			github: 'https://github.com/deenuy/SCS-Personalized-Stocks-Discovery-Fullstack'
    },
    {
			image: '06',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
			category: 'Machine Learning',
			title: 'Market Segmentation & Preference Analysis',
			github: ''
    },
    {
			image: '07',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
			category: 'Full-stack Developmen',
			title: 'Day Planner (Frontend App)',
			github: 'https://github.com/deenuy/UofT-day-planner-webapp'
    },
    {
			image: '08',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
			category: 'Full-stack Developmenr',
			title: 'Weather Dashboard (Frontend App)',
			github: 'https://github.com/deenuy/UofT-weather-app'
    },   
]

// Fullstack Web Development; MERN Stack, React app projects from gituhub
const TabTwo = [
	{
		image: '01',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
		category: 'Full-stack Development',
		title: 'Google Book Store (React App)',
		github: 'https://github.com/deenuy/MERN-stack-google-books-store'
	},
	{
		image: '02',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
		category: 'Full-stack Development',
		title: 'ePet Shop (React App)',
		github: 'https://github.com/deenuy/uoft-mern-stack-ePet-shop-app'
	},
	{
		image: '04',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
		category: 'Full-stack Development',
		title: 'Grid Search & Sort (React App)',
		github: 'https://github.com/deenuy/UofT-react-emp-directory'
	},
	{
		image: '05',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
		category: 'Full-stack Development',
		title: 'Discover Stocks (Frontend App)',
		github: 'https://github.com/deenuy/SCS-Personalized-Stocks-Discovery-Fullstack'
	},
	{
		image: '07',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
		category: 'Full-stack Developmen',
		title: 'Day Planner (Frontend App)',
		github: 'https://github.com/deenuy/UofT-day-planner-webapp'
	},
	{
		image: '08',
		bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
		category: 'Full-stack Developmenr',
		title: 'Weather Dashboard (Frontend App)',
		github: 'https://github.com/deenuy/UofT-weather-app'
	},
]

// Machine Learning and AI Projects
const TabThree = [
    {
			image: '05',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
			category: 'Machine Learning',
			title: 'Covid19 Twitter Sentiment Analysis',
			github: ''
    },
    {
			image: '06',
			bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
			category: 'Machine Learning',
			title: 'Market Segmentation & Preference Analysis',
			github: ''
    },
]

// Collaborated Projects on github
const TabFour = [
    
]

class TabStyleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, tab2, tab3, tab4, isOpen } = this.state;
        return (
            <div>
                <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab><span>All Project</span></Tab>
                                    <Tab><span>Full-stack Development</span></Tab>
                                    <Tab><span>Machine Learning</span></Tab>
                                    <Tab><span>Misc.</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>

                    <TabPanel className="row row--35">
                        {TabOne.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                        prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={`${value.github}`}>
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={`${value.github}`}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
            
                    <TabPanel className="row row--35">
                        {TabTwo.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabTwo[tab2].bigImage}
                                        nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                        prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab2: (tab2 + 1) % TabTwo.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab2: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={`${value.github}`}>
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={`${value.github}`}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabThree.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabThree[tab3].bigImage}
                                        nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                        prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab3: (tab3 + 1) % TabThree.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab3: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={`${value.github}`}>
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={`${value.github}`}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFour.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFour[tab4].bigImage}
                                        nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                                        prevSrc={TabFour[(tab4 + TabFour.length - 1) % TabFour.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab4: (tab4 + 1) % TabFour.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab4: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={`${value.github}`}>
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={`${value.github}`}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}


export default TabStyleThree
