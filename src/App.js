
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './Components/Layout';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter  as Router,Routes,Route, }from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Loginpage';
import Addusers from './Users/Adduser';

// import Edit from './Components/Edit';
import About from './Components/About';

function App() {
  return (
   <>
   
<Router>
  <Layout />
      <Routes>
          <Route path="Home" element={<Home/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Addusers" element={<Addusers/>}/>
        {/* <Route path="Edit" element={<Edit/>}/>  */}
      </Routes>
    </Router>
   </>
  );
}

export default App;
