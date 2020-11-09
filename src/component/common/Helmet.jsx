import React, { Component } from "react";
import {Helmet} from 'react-helmet'

// React Helmet is a small library that helps to manage the document head

class PageHelmet extends Component{
    render(){
        return(
          <React.Fragment>
            <Helmet>
              <title>{this.props.pageTitle} || Deenu's Portfolio </title>
              <meta name="description" content="React-based portfolio deveoped for my resume." />
            </Helmet>
          </React.Fragment>
        )
    }
}

export default PageHelmet;
