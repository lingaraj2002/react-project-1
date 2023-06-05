import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import './Filterbar.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { afterFilter } from '../Redux/stateSlice'

const Filterbar = () => {

  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  const [valueCheck, setValueCheck] = useState(1);
  console.log(valueCheck,setValueCheck);
  const {filter} = useSelector(({sample}) => sample);
 
  const [Objects, setObjects] = useState(filter);

  const localObjects = JSON.parse(localStorage.getItem('local'));
console.log(localObjects);

  const filteredObject = (e) => {
    switch(e){
      case 'All' :
        dispatch(afterFilter(Objects)) 
        console.log('all');
      break;

      case "mixes" :
        dispatch(afterFilter(filter.filter(e => e.mix === "mix")))
        console.log('mix');
      break;

      case 'music' :
        dispatch(afterFilter(filter.filter(e => e.type === "music")))
        console.log('music');
      break;

      case 'gadgets' :
        dispatch(afterFilter(filter.filter(e => e.type === "gadgets")))
      break;

      case 'animated films' :
        dispatch(afterFilter(filter.filter(e => e.type === "animated")))
      break;

      case 'bikes' :
        dispatch(afterFilter(filter.filter(e => e.type === "bike")))
      break;

      case 'cars' :  
        dispatch(afterFilter(filter.filter(e => e.type === "cars")))
      break;

      case 'cartoons' :
        dispatch(afterFilter(filter.filter(e => e.type === "cartoons"))) 
      break;

      case 'cooking' : 
        dispatch(afterFilter(filter.filter(e => e.type === "cooking")))
        console.log('cook');
      break;

      case 'gaming' :
        dispatch(afterFilter(filter.filter(e => e.type === "gaming")))
        console.log('game');
      break;

      case 'news' :
        dispatch(afterFilter(filter.filter(e => e.type === "news")))
        console.log('news');
      break;

      case 'smart phones' : 
        dispatch(afterFilter(filter.filter(e => e.type === "mobiles")))
      break;

      case 'tnpsc' :
        dispatch(afterFilter(filter.filter(e => e.type === "tnpsc")))
      break;

      default :
      setObjects(filter);
      dispatch(afterFilter(Objects))
    }
  }

  return (
    <div id='filterbar'>
       <Stack className='filterbar-row' spacing={2} direction="row">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example">
              <Tab label="All" onClick={() => filteredObject('All')}  />
              <Tab label="Mixes" onClick={() => filteredObject('mixes')}/>
              <Tab label="Music" onClick={() => filteredObject('music')} />
              <Tab label="Gadgets" onClick={() => filteredObject('gadgets')}  />
              <Tab label="Animated films" onClick={() => filteredObject('animated films')}  />
              <Tab label="Bikes" onClick={() => filteredObject('bikes')}  />
              <Tab label="Cars" onClick={() => filteredObject('cars')}  />
              <Tab label="Cartoons" onClick={() => filteredObject('cartoons')}  />
              <Tab label="Cooking" onClick={() => filteredObject('cooking')}  />
              <Tab label="Games" onClick={() => filteredObject('gaming')}  />
              <Tab label="News" onClick={() => filteredObject('news')}   />
              <Tab label="Smart phones" onClick={() => filteredObject('smart phones')}   />
              <Tab label="TNPSC" onClick={() => filteredObject('tnpsc')}   />
            </Tabs>
          </Stack>
    </div>
  )
}

export default Filterbar
