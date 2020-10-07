import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/project/AddProject'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Dashboard />
        <Route to="/addProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
