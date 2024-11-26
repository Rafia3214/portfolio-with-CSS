import React from 'react'
import '@/components/style/footer.css'
import { FaMapMarkerAlt,FaFacebook,FaLinkedin,FaGithub  } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      {/* left col */}

    <div className='col-left'>
      <div className='col-box'>
      <FaMapMarkerAlt className='i'/>
        <span>239 D Gulshan Iqbal Karachi</span>
      </div>
      <div className='col-box'>
       <FaPhone className='i'/>
        <span>0123 345 675432</span>
      </div>
      <div className='col-box'>
      <AiTwotoneMail className='i' />
        <span>rafia@gmail.com</span>
      </div>
       </div>
       {/* right col */}
    <div className='col-right'>
      <span>About My Services</span>
      <span><p>All rights reserved @2024</p></span>
      <div className='social-icons'>
     <FaFacebook /> 
     <AiFillInstagram />
      <FaLinkedin />
      <FaGithub />
      </div>

    </div>
    </footer>

  );
}

export default Footer