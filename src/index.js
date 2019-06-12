import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campuses from './Campuses';
import Campus from './Campus';
import NewCampus from './NewCampus';
import EditCampus from './EditCampus';
import DeleteCampus from './DeleteCampus';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
  <div>
    <Link to="/">Home</Link> |
    <Link to="/campuses">Campuses</Link> |

    <Route exact path="/" component={App} />
    <Route exact path="/campuses" component={Campuses} />
    <Route path="/campuses/:id" component={Campus} />
    <Route path="/new/campuses" component={NewCampus} />
    <Route path="/edit/campuses/:id" component={EditCampus} />
    <Route path="/delete/campuses/:id" component={DeleteCampus} />
  </div>
</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
