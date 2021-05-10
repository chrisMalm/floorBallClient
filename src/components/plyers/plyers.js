import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { API_URL } from '../../constants/api';
import './players.css';

export const Plyers = () => {
  const [playerList, setPlayerList] = useState([]);
  const [menyActive, setMenyActive] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDesc, setShowDesc] = useState('');

  const showModalDesc = (desc) => {
    setShowDesc(desc);
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/playerList`)
      .then((res) => {
        if (res) {
          setPlayerList(res.data);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);
  return (
    <div className='clientsContainer'>
      {showPopUp ? (
        <div className='popupContainer'>
          <div className='wrapperCloseClientPopup'>
            <div
              className='closeClientPopup'
              onClick={() => setShowPopUp(false)}
            >
              X
            </div>
          </div>
          <div className='wrapperDescription'>
            <div className='wrapperDescLogo'>
              <div className='descLogo'></div>
            </div>
            {/* lägg till riktig desc när de finns data  */}
            <div className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              provident ab aut tempore? Consequatur nobis fuga dolores facilis!
              Velit, reprehenderit voluptatum. Nulla, commodi adipisci
              repellendus incidunt ad, corrupti eaque provident iure ipsum
              maiores, dolorem voluptatem eos? Nobis praesentium ipsum odio.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              maiores quo saepe sed blanditiis commodi, quos earum pariatur. In
              autem suscipit eligendi aliquam cupiditate, voluptates dicta vel
              adipisci maiores earum ipsam distinctio et nihil labore tempora id
            </div>
          </div>
        </div>
      ) : null}
      {/* mobile device hamburger */}
      <div
        onClick={() => setMenyActive(!menyActive)}
        className='wrapperHamburgerPlayer'
      >
        {menyActive ? (
          <div className='testPlayers'>
            <div className='activehamburgerIconPlayer'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div>
            <div className='wrapperDropdownPlayer'>
              <ul className='wrapperHamburgerRoutesPlayer'>
                <li className='hamburgerRoutesPlayer'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hamburgerRoutesPlayer'>
                  <Link to='/players'>clients</Link>
                </li>
                <li className='hamburgerRoutesPlayer'>
                  <Link to='/about'>about</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='hamburgerIconPlayer'>
            <i class='fas fa-volleyball-ball'></i>{' '}
          </div>
        )}
      </div>
      {/* desktop device navbar  */}
      <div className='headerPlayers'>
        <div className='navPlayer'>
          <ul className='wrapperDesktopRoutesPlayers'>
            <li className='desktopRoutesPlayers'>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li className='desktopRoutesPlayers'>
              <Link className='link' to='/players'>
                Clients
              </Link>
            </li>
            <li className='desktopRoutesPlayersAbout'>
              <Link className='link' to='/about'>
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='wrapperPlayerContainer'>
        {/* <div className='wrapperHeaderClients'>
          <div className='headerClients'>
            <i class='fas fa-user-edit'></i>Jact Clients
          </div>
        </div> */}
        {playerList.map((player) => {
          return (
            <div className='wrapperPlayer' key={player._id}>
              <div
                className='wrapperImg'
                onClick={() => showModalDesc(player.desc)}
              >
                <span class='fas fa-search-plus icon'></span>
                <img
                  className='playerImg'
                  src={`${API_URL}/uploads/${player.img}`}
                  alt=''
                />
              </div>
              <div className='wrapperDesc'>
                <div className='name'>{player.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
