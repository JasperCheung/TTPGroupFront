import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Campuses from './components/Campuses';
import Campus from './components/Campus';
import NewCampus from './components/NewCampus';
import EditCampus from './components/EditCampus';
import DeleteCampus from './components/DeleteCampus';
import Students from './components/Students';
import Student from './components/Student';
import NewStudent from './components/NewStudent';
import EditStudent from './components/EditStudent';
import DeleteStudent from './components/DeleteStudent';

import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <div className="left">
            <Link to="/">Home</Link>
          </div>
          <div className="right">
            <Link to="/campuses">Campuses</Link>
            <Link to="/students">Students</Link>
          </div>
        </nav>

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
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
