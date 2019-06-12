import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campuses from './Campuses';
import Campus from './Campus';
import NewCampus from './NewCampus';
import EditCampus from './EditCampus';
import DeleteCampus from './DeleteCampus';
import Students from './Students';
import Student from './Student';
import NewStudent from './NewStudent';
import EditStudent from './EditStudent';
import DeleteStudent from './DeleteStudent';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
  <div>
    <Link to="/">Home</Link> |
    <Link to="/campuses">Campuses</Link> |
    <Link to="/students">Students</Link>

    <Route exact path="/" component={App} />
    <Route exact path="/campuses" component={Campuses} />
    <Route path="/campuses/:id" component={Campus} />
    <Route path="/new/campuses" component={NewCampus} />
    <Route path="/edit/campuses/:id" component={EditCampus} />
    <Route path="/delete/campuses/:id" component={DeleteCampus} />
    <Route exact path="/students" component={Students} />
    <Route path="/students/:id" component={Student} />
    <Route path="/new/students" component={NewStudent} />
    <Route path="/edit/students/:id" component={EditStudent} />
    <Route path="/delete/students/:id" component={DeleteStudent} />
  </div>
</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
