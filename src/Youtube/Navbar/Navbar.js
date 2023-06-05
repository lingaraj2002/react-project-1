import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logedin } from '../Redux/stateSlice';

const Navbar = () => {
  const state = useSelector(({sample}) => sample);
  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState(true);
  console.log(setAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let Navigate = useNavigate();
  const LogOut = () =>{
    localStorage.setItem("isLoggedin",JSON.stringify(false));
    dispatch(logedin(false));
    Navigate("/");
  }
  const LogIn = () =>{
    Navigate("/Login"); 
  }

  return (
    <div id='topnavbar'>
    <div className='navbar-container'>
      <div className='navbar-row'>
        <div className='navbar-col-1'>
          <div className='navbar-menu'>
              <MenuIcon />
          </div>
          <div className='navbar-icon'>
            <img className='youtube-icon' src={require('./NavbarImage/youtube.jpg')}/>
          </div>
        </div>
        <div className='navbar-col-2'>
            <div className='navbar-search-card'>
                    <input className='navbar-search-input' placeholder='search'/>
              <div className='navbar-search-icon'>
              <SearchIcon />
              </div>
          </div>
          <div className='navbar-mike'>
              <KeyboardVoiceIcon/>
          </div>
        </div>
        <div className='navbar-col-1 navbar-col-3'>
            <div className='navbar-cam-icon'>
                <VideoCameraBackOutlinedIcon/>
            </div>
            <div className='navbar-msg-icon'>
                <NotificationsNoneOutlinedIcon/>
            </div>
            <div className='navbar-profile'>
            {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img className='userImage' src={ state.isLoggedIn ? state.user.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm_qyYGdWVVFHI6xhJxBQnVrMNqKvsunHfr8CXiWT3hHYcGA&s'}></img>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {state.isLoggedIn ?  <MenuItem onClick={LogOut}>Logout</MenuItem> : <MenuItem onClick={LogIn}>LogIn</MenuItem> }
                <MenuItem onClick={handleClose}>Switch Account</MenuItem>
              </Menu>
            </div>
          )}
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
