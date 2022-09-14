import './App.css';
import { AddPerson } from './components/registration';
import { Login } from './components/login';
import { Navigation } from './components/Navigation';
import { Booking } from './components/bookingride';
import { Feeds } from './components/feedbacks';
import { Updates } from './components/update';

import ViewFeed from './components/viewfeedback';

import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      {/* <AddPerson />
      <Login/>
      */}
    
      <Navigation />
      <BrowserRouter>
      <Routes>
       
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/aperson" element={<AddPerson />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/bookingride" element={<Booking />} /> 
        <Route path="/feedbacks" element={< Feeds/>} /> 
        <Route path="/viewfeedback" element={< ViewFeed/>} /> 
      
        <Route path="/update" element={< Updates/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;