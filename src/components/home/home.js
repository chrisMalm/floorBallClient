import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  const [menyActive, setMenyActive] = useState(false);
  return (
    <div className='wrapperHomeContainer'>
      {/* mobile device hamburger */}
      <div
        onClick={() => setMenyActive(!menyActive)}
        className='wrapperHamburgerHome'
      >
        {menyActive ? (
          <div className='test'>
            <div className='activeHamburgerIconHome'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div>
            <div className='wrapperDropdownHome'>
              <ul className='wrapperHamburgerRoutesHome'>
                <li className='hamburgerRoutesHome'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hamburgerRoutesHome'>
                  <Link to='/players'>clients</Link>
                </li>
                <li className='hamburgerRoutesHome'>
                  <Link to='/about'>about</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='hamburgerIconHome'>
            <i class='fas fa-volleyball-ball'></i>{' '}
          </div>
        )}
      </div>
      {/* desktop device navbar  */}
      <div className='headerHome'>
        <div className='smallLogoContainerHome'>
          <div className='smallLogoHome'></div>
        </div>
        <div className='navHome'>
          <ul className='wrapperDesktopRoutesHome'>
            <li className='desktopRoutesHome'>
              <Link className='homeLink' to='/'>
                Home
              </Link>
            </li>
            <li className='desktopRoutesHome'>
              <Link className='homeLink' to='/players'>
                clients
              </Link>
            </li>
            <li className='desktopRoutesHomeAbout'>
              <Link className='homeLink' to='/about'>
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* center Logo  */}
      <div className='logoContainer'>
        <div className='logo'></div>
      </div>
      <div className='wrapperFooter'>
        <div className='footer'>
          <div className='contact'>
            <a href='mailto:info@jact.eu'>
              <i className='far fa-envelope icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a href='tel: +46735177331'>
              {' '}
              <i class='fas fa-phone icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a
              href='https://www.instagram.com/jact.eu/?hl=sv'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-instagram icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a
              href='https://sv-se.facebook.com/jact.eu/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook icons'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
