import React from 'react';
import logo from '../../images/Logo.svg';
import '../Header/Header.css'

const header = () => {
    return (
       
            
           
              <div className='header'>
               
               
             
             
               <img src={logo} alt="" />
               
               <nav className='nav'>
                
                  <a href="home">Home</a>
                  <a href="About">About</a>
                  <a href="Contact">Contact</a>
                  <a href="Service">Service</a>
                   
               </nav>




              </div>
            
           
       
    );
};

export default header;