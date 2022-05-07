import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upperbar from './components/Navbar'
import Login_input from './components/login_input'
import Footer from './components/Footer'

export default function App(){

return(
  <div>
    <Upperbar />
    < Login_input />
    < Footer />
  </div>
)

}