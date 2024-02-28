import React from 'react';
import Logo from "./assets/logo.png";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./App.css";


function App() {
  return (
    <>
    {/* Navbar */}
      <div className='header'>
        <div>
          <img src={Logo} alt="Logo not available"/>
        </div>
      </div>

      {/* Container */}
      <div>
        <div className='container'>

      {/* Image 1 */}
        <div>
          <img className='img-1' src={Image1} alt="Not available"/>
        </div>
      {/* Content */}
        <div>
        <p className='content-para'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img className='img-2' src={Image2} alt="Not available"/>
        <p className='content-para2'>
        Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
        </div>
      </div>
          {/* Para */}
          <p className='para'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
           </p>
        {/* Equipments Image */}
        <div className='equip-img'>
          <img src={Image3} alt="Not available" />
          <p className='para'>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
        </div>
        <hr className='hr' />
        <p className='para2'>
          C.R.I FLUID SYSTEMS PRODUCTIONS CATER TO DIVERSE SEGMENTS
        </p>
        <div className='para'>
      CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL
      </div>
      </div>
      <footer className='footer-content'>
      <div>
       <span><FontAwesomeIcon icon={faPhone}/></span> Toll free : 1800 200 1234
      </div>
      <div>
       <span><FontAwesomeIcon icon={faFacebook}/></span> <a href="www.facebook.com/cripumps" className=''>www.facebook.com/cripumps</a>
      </div>
      <div>
      <span><FontAwesomeIcon icon={faGlobe}/></span> <a href="www.crigroups.com" className=''>www.crigroups.com</a>
      </div>
      </footer>
    </>
  )
}

export default App;
