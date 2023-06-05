import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SortIcon from '@mui/icons-material/Sort';
import './Details.scss';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import Objects from '../Video/Object';
import Filterbar from '../Navbar/Filterbar';
import { comment } from '../Redux/stateSlice';

let commentBox = [];
const Details = () => {

  const sta = useSelector(({sample})=> sample);
  let b = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Video = useSelector(({ sample }) => sample.files);
  const [state, setState] = useState(Objects);
  const ObjectsVideo = state.filter(e => e.type === Video.type);
  console.log(ObjectsVideo);

  const [videoState, setVideoState] = useState([Video]);
  console.log(videoState);

  const oneVideo = (e) => {
    setVideoState([e]);
  }

  const[like,setLike] = useState(0);
  
  const getlike = () => {
    setLike(like + 1)
  }

  const getdislike = () => {
    if(like > 0){
    setLike(like - 1);
    }
  }

  //--------------comment sec-----------//
  const comments = useSelector(({ sample }) => sample.comment);
  const dispatch = useDispatch();
  
  const [cap,setcap] = React.useState();
  let inpCom = (e)=>{
        console.log("e",e.target.value);
        setcap( e.target.value);
        console.log(setcap)
  }
  let mapCom =()=>{
    let setup = {k:cap}
    if(cap!==""){
      if(comments.length>0){
        dispatch(comment([...comments,setup]));
        setcap("");
        console.log(comments)
      }
      else{
        commentBox.push(setup);
        dispatch(comment(commentBox));
        setcap("");
        console.log(commentBox)
      }
      console.log(comments)
    }
  }
  const [comlike,setComLike] = useState(true);
  let likes = ()=>{
    setComLike(false);
  }
  
  return (
    <>
      <div id='details-sec'>
        <div className='details-container'>
          <div className='details-row-1'>
            {videoState.map((val, i) => {
              return <div key={i} id='play-video'>
                        <div className='video-div'>
                          <video
                              // autoPlay={true}
                              className='details-video'
                              src={val.url}
                              poster={val.thump}
                              controls
                          />
                </div>
                <div className='details-col-2'>
                  <h4>{val.name}</h4>
                </div>
                <div className='details-col-3'>
                  <div className='details-description-1'>
                    <div className='details-channel-icon'>
                      <img className='details-channel' src={(val.logo)} />
                    </div>
                    <div className='details-channel-name'>
                      <h4>{val.channel}</h4>
                     
                      <p>Subscribers</p>
                    </div>
                    <div className='details-channel-subscribe'>
                      <button id='subscribe'>subscribe</button>
                    </div>
                  </div>
                  <div className='details-description-2'>
                    <div className='details-like'>
                      <Checkbox id='like' onClick={()=>getlike(value)} color='error' icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpOffAltIcon/>} />
                      <p id='like-count'>{like}</p>
                      <Checkbox id='dislike' onClick={()=>getdislike(value)}  icon={ <ThumbDownOffAltIcon />} checkedIcon={<ThumbDownOffAltIcon />} />
                    </div>
                    <div className='details-share'>
                      <button id='share'>
                        <ReplyIcon />Share
                      </button>
                    </div>
                    <div className='details-download'>
                      <button id='download'>
                        <DownloadIcon />Download
                      </button>
                    </div>
                    <div className='details-extra'>
                      <button id='extra'>
                        <MoreHorizIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='details-col-4'>
                  <div className='details-video-description'>
                    <p>Hi everyone, welcome back to our channel. In this video, We’re going to show you [topic covered in video]</p>
                    <p>Our channel is about [your topic]. We cover a lot of cool stuff like [topics covered in your channel]. </p>
                    <p>Visit Our Youtube Channel Here: </p>
                    <p>https://www.youtube.com/channel </p>
                  </div>
                </div>
                <div className='details-col-5'>
                  <div className='details-comment-count'>
                    <div className='comment-count'>
                      <p>50 Comments</p>
                    </div>
                    <div className='comment-sort'>
                      <SortIcon />Sort
                    </div>
                  </div>
                  <div className='details-comment'>
                 
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    {[sta.user]?.map((value,index)=>{
                        return<>
                      <img className='userImage margin-img' src={`${value.img}`}></img>
                      </>
                      })}
                      <TextField style={{ width: "100%" }} value={cap} onChange={inpCom} id="input-with-sx" label="Add a Comment" variant="standard" />
                    </Box>
                    
                  </div>
                  <div className='comment-btn-row'>
                    <div className='comment-icon'>
                      <div className='comment-smile'>
                        <SentimentSatisfiedAltSharpIcon />
                      </div>
                      <div className='comment-para'>
                        <p>By completing this action you are creating a <span>​channel</span> and agree to <span>​YouTube's Terms of Service</span>​.</p>
                      </div>
                    </div>
                    <div className='comment-btn'>
                      <div className='comment-cancel'>
                        <Button
                          color="secondary"
                          disabled={false}
                          size="small"
                          variant="filledTonal"
                          value="cancel"
                        >cancel</Button>
                      </div>
                      <div className='comment-ok'>
                        <Button
                          color="secondary"
                          disabled={false}
                          size="small"
                          variant="filledTonal"
                          value="cancel"
                          onClick={mapCom}
                        >Comment</Button>
                      </div>
                    </div>
                  </div>
                  <div className='comment-section'>
                  {comments.map((value,index)=>{
                       return<>
                       {[sta.user]?.map((value,index)=>{
                         return<>
                         <div className='userNameCom' key={index}>
                            <div className='user-image'>
                               <img className='margin-img' src={`${value.img}`}/>
                            </div>
                           <div>
                             <p className='userNameInCom'>{value.name}</p>
                             <p className='timecomment'>1 second ago</p>
                           </div>
                         </div>
                         </>
                       })}
                       <div className='user-comment'>
                         <p>{value.k}</p>
                         <div className='comment-like'>
                           <button id='thumbsup' >{like?<ThumbUpOffAltIcon onChange={likes}/>:<ThumbUpAltIcon />}</button>
                           <button id='thumbsdown'><ThumbDownOffAltIcon /></button>
                           <p style={{fontWeight:"500"}}>Reply</p>
                         </div>
                        
                       </div>
                   </>
                      })}
                    </div>
                    </div>
                  </div>
            })}

          </div>
          <div className='details-row-2'>
            <div id='details-filterbar'>
              <Filterbar/>
            </div>
            {ObjectsVideo.map((value, i) => {
              return <div key={i} className='details-card-2' onClick={() => oneVideo(value)}>
                <div className='details-right-video'>
                  <img className='details-right-image' src={(value.thump)} />
                </div>
                <div className='details-right-description'>
                  <div className='details-name'>
                    <h4>{value.name}</h4>
                  </div>
                  <div className='details-channel'>
                    <p>Channel Name</p>
                  </div>
                  <div className='details-content'>
                    <div className='details-view'>
                      <h5>View</h5>
                    </div>
                    <div className='details-ago'>
                      <h5>Ago</h5>
                    </div>
                  </div>
                </div>
              </div>
            }
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
