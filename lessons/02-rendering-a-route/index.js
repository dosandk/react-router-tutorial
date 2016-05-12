import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import News from './modules/News'
import About from './modules/About'
import Repos from './modules/Repos'
import { Router, Route, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/news" component={News}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'));