import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./assets/logo.png";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faIntercom } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <>
    {/* Navbar */}
      <div className='text-center header'>
        <div>
          <img className='img-fluid col-3' src={Logo} alt="Logo not available"/>
        </div>
      </div>

      {/* Container */}
      <div>
        <div className='d-flex'>

      {/* Image 1 */}
        <div>
          <img className='img-fluid' src={Image1} alt="Not available"/>
        </div>
      {/* Content */}
        <div className='col-8'>
        <p className='fw-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img className='img-fluid' src={Image2} alt="Not available"/>
        <p>
        Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
        </div>
      </div>
          {/* Para */}
          <p className='text-center my-3'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
           </p>
        {/* Equipments Image */}
        <div className='container'>
          <img className='img-fluid' src={Image3} alt="Not available" />
          <p className='text-center'>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
        </div>
        <hr className='text-danger fs-1' />
        <p className='text-center fw-bold'>
          C.R.I FLUID SYSTEMS PRODUCTIONS CATER TO DIVERSE SEGMENTS
        </p>
        <div className='text-center my-3'>
      CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL
      </div>
      </div>
      <footer className='bg-danger text-white d-flex justify-content-between p-5'>
      <div>
       <span><FontAwesomeIcon icon={faPhone}/></span> Toll free : 1800 200 1234
      </div>
      <div>
       <span><FontAwesomeIcon icon={faFacebook}/></span> <a href="www.facebook.com/cripumps" className='text-decoration-none text-white'>www.facebook.com/cripumps</a>
      </div>
      <div>
      <span><FontAwesomeIcon icon={faGlobe}/></span> <a href="www.crigroups.com" className='text-decoration-none text-white'>www.crigroups.com</a>
      </div>
      </footer>
    </>
  )
}

export default App;
