import React from 'react';
import group from "./images/group.png";

function App() {
  return (
    <div className="Page">
      <header>
        <div className="Section-content">
          <nav className="SiteNavigation">

            <ul className="SiteNavigation-column">
             <li className="SiteNavigation-item">
                <img className='SiteNavigation-uperItem' src={group} alt="" />
                <h1 className='SiteNavigation-uperItem'>testtask</h1>
              </li>
            </ul>
            <ul className="SiteNavigation-column">
              <li className="SiteNavigation-item">
                <a className="SiteNavigation-link" href="/">
                  Users
                </a>
              </li>
              <li className="SiteNavigation-item">
                <a className="SiteNavigation-link" href="/">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
