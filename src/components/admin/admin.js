import React, { useState } from 'react';
import { AddPlyerPopup } from './addPlyerPopup/AddPlyerPopup';
import { PlayerList } from './playerList/PlayerList';
import './admin.css';

export const Admin = () => {
  // const [showModal, setShowModal] = useState(false);
  const [playersArr, setplayersArr] = useState([]);
  const [updatedPlayerList, setUpdatedPlayerList] = useState([]);

  return (
    <>
      {localStorage.getItem('loggedIn') !== null ? (
        <div className='adminContainer'>
          <div className='addPlyerPopup'>
            <AddPlyerPopup setUpdatedPlayerList={setUpdatedPlayerList} />
          </div>

          <div className='wrapperPlayerList'>
            {/* <div>all players from BE</div> */}
            <PlayerList
              updatedPlayerList={updatedPlayerList}
              setUpdatedPlayerList={setUpdatedPlayerList}
              setplayersArr={setplayersArr}
              playersArr={playersArr}
            />
          </div>
        </div>
      ) : (
        <h1>Not authorized.</h1>
      )}
    </>
  );
};
