// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Create Import File
import './index.scss';

// Home layout
import DeenuPortfolio from './home/DeenuPortfolio';

class Root extends Component{
    render(){
        return(
          <BrowserRouter basename={'/'}>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={DeenuPortfolio}/>
            </Switch>
          </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();