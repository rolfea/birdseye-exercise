import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.js';
import TaskView from './taskView/TaskView.js';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/landingpage/">Landing Page</Link>
            </li>
            <li>
              <Link to="/taskview/">Task View</Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/landingpage/" component={LandingPage} />
        <Route path="/taskview/" component={TaskView} />
      </div>
    </Router>
  );
}

export default AppRouter;