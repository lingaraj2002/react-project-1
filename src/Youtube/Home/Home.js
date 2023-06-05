import React, { useState } from 'react'
import LeftSideNavbar from '../Navbar/LeftSideNavbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { files } from '../Redux/stateSlice';
import './Home.scss';
import Filterbar from '../Navbar/Filterbar';
import Objects from '../Video/Object';

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState(Objects);

  const Navigate = useNavigate();
  const {afterFilter} = useSelector(({sample}) => sample)
  const dispatch = useDispatch();
  console.log(afterFilter);

  const video = (e) => {
    dispatch(files(e));
    Navigate("/Details");
  };

  return (
    <>
      <div className='homePage'>
        <div className='sideNav'>
          <LeftSideNavbar />
        </div>
        <div className='home'>
          <Filterbar/>
          {afterFilter?.map((value, index) => (
            <div key={index} className='homeCard'>
              <a onClick={() => video(value, index)}>
                <div className='home_thump_img'>
                  <img src={value.thump} alt='no image'></img>
                </div>
                <div id='home_logo_hed4_para'>
                  <div className='home_logo_img'>
                    <img src={value.logo} alt='no image'></img>
                  </div>
                  <div className='home_hed_4_para'>
                    <h4>{value.name}</h4>
                    <p>SonyMusicSouthVEVO</p>
                    <p>52M views . 8 years ago</p>
                  </div>
                </div>
                <div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;