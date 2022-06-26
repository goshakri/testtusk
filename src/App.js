import React from 'react';
import group from "./images/group.png";
import eliaps1 from "./images/eliaps1.png";
import eliaps2 from "./images/eliaps2.png";
import eliaps3 from "./images/eliaps3.png";
import eliaps4 from "./images/eliaps4.png";
import eliaps5 from "./images/eliaps5.png";
import eliaps6 from "./images/eliaps6.png";



function App() {
  return (
    <div className="Page">
      <header>
        <div className='Section Section--bgcolor'>
          <div className="Section-content">
            <nav className="SiteNavigation">
              <ul className="SiteNavigation-column">
              <li className="SiteNavigation-item">
                  <img className="SiteNavigation-uperItem" src={group} alt="" />
                  <h1 className='SiteNavigation-uperItem'>testtask</h1>
                </li>
              </ul>
              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link u-mr-15" href="/">
                    Users
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link SiteNavigation-link--second" href="/">
                    Sign Up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="Page-content">
        <div className="Section-content">
          <div className="Slider">
            <div className="Section Section--bgimage">
              <div className="Slider-item">
                <div className='Slider-title'>
                  <h1 className='Slider-title Slider-title--one u-pb-20'>Test assignment for front-end developer</h1>
                  <p className='Slider-title Slider-title--two'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                  <a className="Slider-btn" href='/'>Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Section u-pb-140'>
          <div className="Section-content">
            <div className='SectionCard'>
                <div className='SectionCard-title u-pt-140 u-pb-50'>
                  <h1 className='SectionCard-title SectionCard-title--one'>Working with GET request</h1>
                </div>

                <div className='SectionCard-item'>
                  <div className='SectionCard-card '>
                    <img className='u-pt-20' src={eliaps1} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                      Salvador Stewart Flynn Thomas Salva Salve...
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                      Leading specialist of the department of cent... 
                      <br /> frontend_develop@gmail.com 
                      <br />+38 (098) 278 44 24
                    </p>
                  </div>

                  <div className='SectionCard-card'>
                    <img className='u-pt-20' src={eliaps2} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                    Takamaru Ayako Jurrien
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                    Lead Independent Director 
                      <br />Takamuru@gmail.com
                      <br />+38 (098) 278 90 24
                    </p>
                  </div>

                  <div className='SectionCard-card'>
                    <img className='u-pt-20' src={eliaps3} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                      Ilya                     
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                    Co-Founder and CEO
                      <br />Ilya_founder@gmail.com
                      <br />+38 (098) 235 44 24
                    </p>
                  </div>

                  <div className='SectionCard-card'>
                    <img className='u-pt-20' src={eliaps4} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                      Alexandre                    
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                      Lead Independent Director
                      <br />Alexandr_develop@gmail.com
                      <br />+38 (098) 198 44 24
                    </p>
                  </div>

                  <div className='SectionCard-card'>
                    <img className='u-pt-20' src={eliaps5} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                      Winny                    
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                      Former Senior Director
                      <br />Winny_develop@gmail.com
                      <br />+38 (098) 278 22 88
                    </p>
                  </div>

                  <div className='SectionCard-card'>
                    <img className='u-pt-20' src={eliaps6} alt=''></img>
                    <p className='SectionCard-title SectionCard-title--pfirst u-pt-20'>
                      Simon 
                    </p>
                    <p className='SectionCard-title SectionCard-title--pseconds u-pt-20'>
                      President of Commerce 
                      <br />Simon@gmail.com
                      <br />+38 (098) 278 44 00
                    </p>
                  </div>
                </div>

                <div className='SectionCard-btn'>
                  <a className='SectionCard-btn SectionCard-btn--button' href='/'>Show more</a>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
