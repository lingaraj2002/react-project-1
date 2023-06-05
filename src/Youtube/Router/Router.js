import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Details from '../Details/Details';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store';
import LoginFirst from '../Login/LoginFirst';
import LoginLast from '../Login/LoginLast';
import Library from '../Library/Library';
import History from '../History/History';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <>  
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Login' element={<LoginFirst/>}></Route>
            <Route path='/Login2' element={<LoginLast/>}></Route>
            <Route path='/Details' element={<Details/>}></Route>
            <Route path='/Library' element={<Library/>}></Route>
            <Route path='/History' element={<History/>}></Route>
        </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

const ProviderSetUp = () => {
  return <Provider store ={store}>
    <Router/>
  </Provider>
}
export default ProviderSetUp

