// import { Fragment, Profiler } from 'react';
import './App.css';
import Home from './Home page/Home';
import User from './User page/User';
import Lenova from './Home page/Lenova';
import Form from './Gulamtry/Form';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Lenova/>
      <nav>
        {/* <Link to="/home">Home</Link>{" "}
        <Link to="/user">User</Link>{" "}
        <Link to="/profile">Profile</Link>{" "}
        <Link to="/lenova">Lenova</Link> */}
      </nav>
      <Routes>
      <Route path='home' element= {<Home/>}/>
      <Route path='user' element= {<User/>}/>
      <Route path='*' element= {<h1>Page Not Found</h1>}/>
      <Route path='lenova' element= {<Lenova/>}/>
      <Route path='form' element= {<Form/>}/> 



      </Routes>
    </BrowserRouter>
  );
}
export default App;