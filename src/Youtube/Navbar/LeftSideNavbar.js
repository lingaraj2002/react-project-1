import React, { useState } from 'react'
import './leftSideNavbar.scss'
import { Checkbox } from '@mui/material'
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSideNavbar = () => {
    const state = useSelector(({sample})=> sample);
    const [isCompleted,setIsCompleted]=useState(false);
    let nav = useNavigate();
    const checked=(e)=>{
        setIsCompleted(e.target.checked?true:false)
       nav('/')
    }
    const checkedLibrary=(e)=>{
        setIsCompleted(e.target.checked?true:false)
        nav('/Library')
    }
    const checkedHistory=(e)=>{
        setIsCompleted(e.target.checked?true:false)
        nav('/History')
    }
    let Subscriptions=[
        {
            name:"Noob Gaming",
            icon:"mdi:user-circle"
        },
        {
            name:"Browsechannels",
            icon:"material-symbols:add-circle-outline"
        },
    ];
    let LoginSubscriptions=[
        {
            name:"Village Cooking",
             img:"./NavbarImage/village-cooking.jpg"
        },
        {
            name:"Learn Codeing",
            img:"./NavbarImage/coding.jpg"
        },
        {
            name:"Fabevy",
            img:"./NavbarImage/fabevy.jfif"
        },
        {
            name:"Gaming Chennal",
            img:"./NavbarImage/gaming.png"
        },
    ]
    console.log(LoginSubscriptions)
    let Explore = [
        {
            name:"Trending",
            icon:"mingcute:fire-line"
        },
        {
            name:"Shopping",
            icon:"icon-park-outline:shopping-bag-one"
        },
        {
            name:"Music",
            icon:"ph:music-note-light"
        },
        {
            name:"Movies & Shows",
            icon:"mdi:movie-open-outline"
        },
        {
            name:"Live",
            icon:"fluent:live-24-regular"
        },
        {
            name:"Gaming",
            icon:"ion:game-controller-outline"
        },
        {
            name:"News",
            icon:"majesticons:note-text-line"
        },
        {
            name:"Sport",
            icon:"solar:cup-star-outline"
        },
        {
            name:"Learning",
            icon:"bx:bulb"
        },
        {
            name:"Fashion & Beauty",
            icon:"solar:hanger-2-linear"
        },
    ]
    let moreYoutube=[
        {
            name:"YouTubePremium",
            icon:"fe:youtube"
        },
        {
            name:"YouTubeMusic",
            icon:"mdi:play-circle"
        },
        {
            name:"YouTubeKids",
            icon:"tabler:brand-youtube-kids"
        }
    ];
    let SettingItem=[
        {
            name:"Setting",
            icon:"ep:setting"
        },
        {
            name:"Report history",
            icon:"ic:baseline-outlined-flag"
        },
        {
            name:"Help",
            icon:"ic:twotone-help-outline"
        },
        {
            name:"Send feedback",
            icon:"ri:feedback-line"
        },
    ]
  return (
    <div className='left-nav'>
        <div className='home-box'>
            <div className='nav-items active'>
                <div className='row justify' onChange={checked}>
                    <Checkbox value={isCompleted} icon={<Icon className='icons' icon="material-symbols:home-outline" />} checkedIcon={<Icon  style={{color:"#000"}} className='icons' icon="material-symbols:home" />} id="Home"/>      
                    <label for='Home' className='para d-md-block'>Home</label>
                </div>
            </div>
            <div className='nav-items'>
                <div className='row justify'>
                     <Icon className='icons' icon="ooui:strikethrough-s" />
                     <p className='para  d-md-block'>Shorts</p>
                </div>
            </div>
            <div className='nav-items d-sm-block d-md-none'>
                <div className='row justify'>
                     <Icon className='icons d-sm-font' icon="material-symbols:add-circle-outline" />
                     <p className='para d-sm-none'>Add</p>
                </div>
            </div>
            <div className='nav-items'>
                <div className='row justify'>
                    <Icon className='icons' icon="material-symbols:subscriptions-outline-rounded" />
                    <p className='para  d-md-block'>Subscription</p>
                </div>
            </div>
            <div className='nav-items d-sm-block d-md-none d-md-block' value={isCompleted} onChange={checkedLibrary}>
                <div className='row justify'>
                <Checkbox  icon={
                    <Icon className='icons' icon="material-symbols:video-library-outline" />   }
                    checkedIcon={<Icon style={{color:"#000"}} className='icons' icon="material-symbols:video-library-rounded" />  } id="Library"/> 
                    <label for='Library' className='para  d-md-block'>Library</label>

                </div>
            </div>
        </div>
        <div className='Library-box d-sm-none'>
            <div className='nav-items' value={isCompleted} onChange={checkedLibrary}>
                <div className='row'>
                <Checkbox  icon={
                    <Icon className='icons' icon="material-symbols:video-library-outline" />   }
                    checkedIcon={<Icon style={{color:"#000"}} className='icons' icon="material-symbols:video-library-rounded" />  } id="Library"/> 
                    <label for='Library' className='para d-sm-none'>Library</label>

                </div>
            </div>
            <div className='nav-items' value={isCompleted} onChange={checkedHistory}>
                <div className='row'>
                <Checkbox  icon={
                     <Icon className='icons' icon="material-symbols:history" />}
                     checkedIcon={<Icon style={{color:"#000"}} className='icons' icon="ic:sharp-manage-history" />  } id="History"/> 
                     <label for='History' className='para'>History</label>
                </div>
            </div>
            {state.isLoggedIn?(<>
            <div className='nav-items'>
                <div className='row'>
                    <Icon className='icons' icon="ic:outline-watch-later" />
                    <p className='para'>Watch Later</p>
                </div>
            </div>
            <div className='nav-items'>
            <div className='row'>
                <Icon className='icons' icon="bx:like" />
                <p className='para'>Liked Videos</p>
            </div>
            </div>
            </>):(
                <div className='logged-like'>
                    <p className='log-like'>Sign in to like videos, comment, and subscribe.</p>
                <Link to="/Login" className='log-sign'><Icon className='log-icon' icon="mdi:user-circle-outline" /> Sign in</Link>
                </div>
            )
            }
        </div>
        <div className='Setting-box d-sm-none'>
        <h2 className='nav-title'>Subscriptions</h2>
            {state.isLoggedIn?(
                <>{LoginSubscriptions?.map((value,index)=>{
                    return <div className='nav-items' key={index}>
                    <div className='row'>
                        <img className='chennalImg' src={require(`${value.img}`)}></img>    
                        <p className='para'>{value.name}</p>
                    </div>
                </div>
            })}
            </>
            ):(<></>)}
            {Subscriptions?.map((value,index)=>{
                return <div className='nav-items' key={index}>
                <div className='row'>
                    <Icon className='icons' icon={value.icon} />     
                    <p className='para'>{value.name}</p>
                </div>
            </div>
            })}
        </div>  
        <div className='Explore-box d-sm-none'>
        <h2 className='nav-title'>Explore</h2>
            {Explore?.map((value,index)=>{
                return <div className='nav-items' key={index}>
                <div className='row'>
                    <Icon className='icons' icon={value.icon} />     
                    <p className='para'>{value.name}</p>
                </div>
            </div>
            })}
        </div>
        <div className='More-box d-sm-none'>
            <h2 className='nav-title'>More from Youtube</h2>
            {moreYoutube?.map((value,index)=>{
                return <div className='nav-items' key={index}>
                <div className='row'>
                    <Icon className='icons' style={{color:"red"}} icon={value.icon} />     
                    <p className='para'>{value.name}</p>
                </div>
            </div>
            })}
            
        </div>   
        <div className='Setting-box d-sm-none'>
            {SettingItem?.map((value,index)=>{
                return <div className='nav-items' key={index}>
                <div className='row'>
                    <Icon className='icons' icon={value.icon} />     
                    <p className='para'>{value.name}</p>
                </div>
            </div>
            })}
            
        </div>      
        <div className='nav-about d-sm-none'>
            <p className='about-content'>
                About Press Copyright Contact usCreator Advertise Developers
            </p>
            <p className='about-content'>
                Terms Privacy Policy & Safety How YouTube works Test new features
            </p>
            <p className='about-content1'>
                © 2023 Google LLC
            </p>
        </div>
    </div>
  )
}

export default LeftSideNavbar
