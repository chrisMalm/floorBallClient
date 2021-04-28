import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_URL } from '../../../constants/api';
import './addplyerPopup.css';

export const AddPlyerPopup = (props) => {
  const { register, handleSubmit } = useForm();
  const { setUpdatedPlayerList } = props;

  const onSubmit = (playerData, e) => {
    const playerName = playerData.name;
    const playerDescription = playerData.description;
    const image = playerData.image[0];
    const singlePlayer = new FormData();
    singlePlayer.append('image', image);
    singlePlayer.append('description', playerDescription);
    singlePlayer.append('name', playerName);

    axios
      .post(`${API_URL}/playerData`, singlePlayer)
      .then((res) => {
        setUpdatedPlayerList(res.data);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>Add player</div>
      <div className='wrapperForm'>
        <div className='wrapperImageFile'>
          <div className='imageFile'>
            <label>Player Image file</label>
          </div>
          <input type='file' name='image' ref={register} />
        </div>
        <div className='wrapperPlayerName'>
          <div className='playerName'>
            <label>Player name</label>
          </div>
          <input autocomplete='off' type='text' name='name' ref={register} />
        </div>
        <div className='wrapperDescription'>
          <div className='desc'>
            <label>Description</label>
          </div>
          <textarea
            name='description'
            cols='40'
            rows='5'
            ref={register}
          ></textarea>
        </div>
        <div className='wrapperBtnAdd'>
          <button className='btnAdd' type='submit'>
            Add player
            <i class='fas fa-user-plus'></i>
          </button>
        </div>
      </div>
    </form>
  );
};
