import React from 'react';
import '@/components/style/hero.css';
import Image from 'next/image';
import pic from '../../../public/self.png';

const Hero = () => {
  return (
    <section id='home'>
      
       <Image src={pic} width={200}height={200} alt='pic' />
    <div className='info-box'><h1><span>Hi I am RAFI RAFI</span></h1>
    <h3><span>Web Developer</span></h3>
    <p> I enjoy transforming ideas into digital reality,
    always pushing my skills and staying updated with the latest front-end technologies to deliver innovative solutions.</p>
    </div>
    <div className='btn-box'>
        <div className='btn'>Hire</div>
        <div className='btn'>Contact Me</div>
    </div>
    </section>
  )
}

export default Hero