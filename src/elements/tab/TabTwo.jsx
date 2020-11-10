import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Trainings & Certifications",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Product Development for IIoT & Manufacturing Ops. Mgmt. Systems <span> - Product Owner</span></a>
                                                    I am held responsible for product development of cloud hosted, .Net/C# & microservices architecture based Manufacturing operations management applications in domain IIoT, Digital Thread, Digital Twin and Digital Manufacturing.
                                                </li>
                                                <li>
                                                    <a href="/service">Solution Design & Implemetnations of Engineering PLM Systems <span> - Solution Architect</span></a>
                                                    proficient and rich domain experience on engineering systems (PLM) for Siemens Teamcenter and Aras Innovator products.
                                                </li>
                                                <li>
                                                    <a href="/service">Program & Project Management <span> - Technical Program Manager</span></a>
                                                    Profecient and strong experience in the discipline of PMO and Program Management for governing and steering successful programs and projects.
                                                </li>
                                                <li>
                                                    <a href="/service">Fullstack Web Development<span> - Development</span></a>
                                                    Developing small scale fullstack apps using MERN stack for AI/ ML implementations in perosnal free time
                                                </li>
                                                <li>
                                                    <a href="/service">Product Development for AI/ML integration <span> - Product Owner (AI/ML)</span></a>
                                                    I am responsible for AI/ML practice for product development in the present company. Developing a roadmap for delivering AI as competent service for the customers.  
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://www.pluraltechnology.com/">Sr. Program Manager (PLM, AI, IIoT)<span> - Plural Technology Inc, Canada</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="https://www.emerson.com/en-ca">Technical Services Manager (PLM)<span> - Emerson Electric Co, India</span></a> 2008 - 2018
                                               </li>
                                               <li>
                                                   <a href="https://geometricglobal.com/">Senior Software Engineer (PLM)<span> - HCl Technologies (Geometric Ltd), India </span></a> 2006- 2008
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Aras Innovator Developing Solutions 12 <span>- Aras</span></a> 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Lean Six Sigma Black Belt <span>- Breakthrough Consulting Services</span></a> 2016
                                               </li>
                                               <li>
                                                   <a href="/service">Lean Six Sigma Green Belt <span>- QAI</span></a> 2016
                                               </li>
                                               <li>
                                                   <a href="/service">Certified ScrumMaster® <span>- Scrum Alliance</span></a> 2015
                                               </li>
                                               <li>
                                                   <a href="/service">ITIL® Foundation <span>- Axelos</span></a> 2015
                                               </li>
                                               <li>
                                                   <a href="/service">MSP® Practitioner - Managing Successful Programmes <span>- Axelos</span></a> 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://bootcamp.learn.utoronto.ca/coding/">Fullstakc Development Bootcamp (May-Nov 2020)<span> - University of Toronto, Toronto, CA</span></a>
                                               </li>
                                               <li>
                                                   <a href="https://continue.yorku.ca/lp/wn/data-analytics/">Big Data, Advanced Data Science and Predictive Analytics (2019-2020)<span> - York University, Toronto, CA</span></a>
                                               </li>
                                               <li>
                                                   <a href="https://lassonde.yorku.ca/">Bachelors (Honours) in Computer Science & Cognitive Science (min)<span> - Lassonde School of Engg. (York University), Toronto, CA</span></a>
                                               </li>
                                               <li>
                                                   <a href="https://www.citdindia.org/html/dtdm_dpe.htm">Post Diploma in Tool Design<span> - Central Institute of Tool Design, India</span></a>
                                               </li>
                                               <li>
                                                   <a href="http://polytechnicts.cgg.gov.in/nizamabad.edu">Diploma in Mechanical Engineering<span> - Govt. Polytechnic Institute, India</span></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;