import React from 'react'
import Image from 'next/image'
import '@/components/style/about.css'

const About = () => {
  return (
    <section id='about'>
    <div className='about-box'>
    <div className='about-info'>
      <div className='title'>
      <h1><span>About Me</span></h1>
     <h3><span>Rafia Rafi</span></h3>
      <p className='p'>
         I am deeply passionate about learning, especially in the field of AI. I am driven by curiosity and the excitement of
         exploring how intelligent systems can transform the way we live and work. I believe that continuous learning is key to staying
         at the forefront of this rapidly evolving field, and I am always eager to expand my skills and knowledge in meaningful ways.
     </p>
    </div>
    <div className='skills'>
      <ul>
     
        <li><span> HTML</span> </li>
        <li> <span> CSS</span> </li>
        <li> <span> TYPESCRIPT</span> </li>
        <li> <span> NODE JS</span> </li>
        </ul>
        <ul>
        <li> <span> JAVASCRIPT</span> </li>
        <li> <span> NEXT JS</span> </li>
        <li> <span> REACT JS</span> </li>
        <li> <span> TAILWIND CSS</span> </li>
      </ul>
      </div>
      </div>

   
    <div className='img-section'>
    <Image src='/img.jpg' width={400}height={400}alt='pro-pic' />
    </div>
    </div>
    </section>
  )
}

export default About