import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css';

export const About = () => {
  const [menyActive, setMenyActive] = useState(false);

  return (
    <div className='aboutContainer'>
      {/* mobile device hamburger */}
      <div
        onClick={() => setMenyActive(!menyActive)}
        className='wrapperHamburger'
      >
        {menyActive ? (
          <div className='testAbout'>
            <div className='hamburgerIcon'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div>
            <div className='wrapperDropdown'>
              <ul className='wrapperHamburgerRoutes'>
                <li className='hamburgerRoutes'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hamburgerRoutes'>
                  <Link to='/players'>clients</Link>
                </li>
                <li className='hamburgerRoutes'>
                  <Link to='/about'>about</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='hamburgerIcon'>
            <i class='fas fa-volleyball-ball'></i>{' '}
          </div>
        )}
      </div>
      {/* desktop device navbar  */}
      <div className='header'>
        <div className='smallLogoContainer'>
          <div className='smallLogo'></div>
        </div>
        <div className='nav'>
          <ul className='wrapperDesktopRoutes'>
            <li className='desktopRoutes'>
              <Link className='aboutLink' to='/'>
                Home
              </Link>
            </li>
            <li className='desktopRoutes'>
              <Link className='aboutLink' to='/players'>
                clients
              </Link>
            </li>
            <li className='desktopRoutesAbout'>
              <Link className='aboutLink' to='/about'>
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='aboutGreg'>
        <h2>About Greg</h2>
      </div>
      <div className='wrapperAboutTextGreg'>
        <div className='arrowLogo'>
          <i class='fas fa-arrow-right'></i>
        </div>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolore eaque provident, assumenda, dolor exercitationem adipisci
            vero blanditiis cupiditate officia nostrum, commodi a possimus nobis
            optio aspernatur architecto? Non, illo libero pariatur placeat
            consequatur voluptatibus ipsa modi nemo fugiat temporibus nobis.
            Iusto, sequi est! Quas!
          </p>
        </div>
      </div>
      <div className='aboutAnders'>
        <h2>About Anders</h2>
      </div>
      <div className='wrapperAboutTextAnders'>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolore eaque provident, assumenda, dolor exercitationem adipisci
            vero blanditiis cupiditate officia nostrum, commodi a possimus nobis
            optio aspernatur architecto? Non, illo libero pariatur placeat
            consequatur voluptatibus ipsa modi nemo fugiat temporibus nobis.
            Iusto, sequi est! Quas!
          </p>
        </div>
        <div className='arrowLogo'>
          <i class='fas fa-arrow-left'></i>
        </div>
      </div>
      <div className='aboutGreg'>
        <h2>About Thomson</h2>
      </div>
      <div className='wrapperAboutTextGreg'>
        <div className='arrowLogo'>
          <i class='fas fa-arrow-right'></i>
        </div>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolore eaque provident, assumenda, dolor exercitationem adipisci
            vero blanditiis cupiditate officia nostrum, commodi a possimus nobis
            optio aspernatur architecto? Non, illo libero pariatur placeat
            consequatur voluptatibus ipsa modi nemo fugiat temporibus nobis.
            Iusto, sequi est! Quas!
          </p>
        </div>
      </div>
    </div>
  );
};
