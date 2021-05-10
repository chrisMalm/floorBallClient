import React, { useEffect } from 'react';
import { API_URL } from '../../../constants/api';
import axios from 'axios';
import './playerList.css';

export const PlayerList = (props) => {
  const {
    setplayersArr,
    playersArr,
    updatedPlayerList,
    setUpdatedPlayerList,
  } = props;

  const newPlayerListAfterDelete = (data) => {
    const formerPlayerList = playersArr;
    const deletedPLayerObject = data.data;
    let mergedObjectsArray = formerPlayerList.concat(deletedPLayerObject);

    let newOb = Object.values(
      mergedObjectsArray.reduce(
        (acc, cur) => Object.assign(acc, { [cur._id]: cur }),
        {}
      )
    );
    setUpdatedPlayerList(newOb);
  };

  const deletePlayer = (playerId) => {
    const data = playerId;
    axios
      .delete(`${API_URL}/deletePlayer/${data}`)
      .then((data) => {
        console.log(data, 'data');
        newPlayerListAfterDelete(data);
      })
      .catch((err) => {
        console.log(err, 'hej ');
      });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/playerList`)
      .then((res) => {
        if (res) {
          setplayersArr(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setplayersArr, updatedPlayerList]);

  return (
    <div className='containerPlayer'>
      {playersArr.map((player) => {
        return (
          <div className='wrapperPlayer' key={player._id}>
            <div className='wrapperImg'>
              <img
                className='playerImg'
                src={`${API_URL}/uploads/${player.img}`}
                alt=''
              />
            </div>
            <div className='wrapperDesc'>
              <div className='name'>{player.name}</div>
              <div className='desc'>{player.desc}</div>
            </div>
            <div className='wrapperBtnDelete'>
              <button
                className='btnDelete'
                onClick={() => deletePlayer(player._id)}
              >
                Delete
                <i className='fas fa-trash-alt'></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
