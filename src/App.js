import React from 'react';
import logo from './logo.svg';
import CampusCard from './CampusCard.jsx';
import './App.css';
import './CampusCard.css';

function App() {
  return (
    <div className = "campuses-container">
      <CampusCard name="Hunter" id="0" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents="1000" />
      <CampusCard name="Hunter1" id="1" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents="1000" />
      <CampusCard name="Hunter2" id="0" image="https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg" numStudents="1000" />
    </div>

  );
}

export default App;
