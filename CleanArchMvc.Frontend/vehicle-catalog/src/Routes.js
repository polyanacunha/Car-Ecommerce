import React from 'react';
import { Route, Routes} from 'react-router-dom';
import UserRegister from './components/UserRegister';
import Menu from './components/Menu';
import VehicleList from './components/VehicleList';
import Login from './components/Login';
import CarDetails from './components/CarDetails'
import CarRegister from './components/CarRegister';
import CardUser from './components/CardUser';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Home from './components/Home';

function AppRoutes() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/cadastre-se" element={<UserRegister/>} />
      <Route path="/vehicleList" element={<VehicleList/>}/>
      <Route path="/vehicle"></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/carDetails" element={<CarDetails/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path="/carRegister" element={<CarRegister/>}></Route>
      <Route path="/cardUser" element={<CardUser/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/userRegister" element={<UserRegister/>}></Route>
    </Routes>
    </>
  );
}

export default AppRoutes;
