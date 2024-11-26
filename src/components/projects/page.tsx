import React from 'react'
import '@/components/style/projects.css'
import Image from 'next/image'


const Projects = () => {
  return (
    <section id='projects'>
  <h1 className='header'><span>Projects</span></h1>
  <div className='projects-container'>
    <div className='box'>
      <span>portfolio With Tailwind css</span>
      <p>Beutifully designed and full resposive portfolio with Next js and Tailwind css</p>
      
    <Image src='/laptop.jpg' width={300}height={300}alt='pro-pic' />
    </div>
    <div className='box'>
      <span>Bakery Website With Tailwind CSS</span>
      <p>Atractive Bakery Website with Next js and Taiwind css</p>
      
    <Image src='/two.png' width={300}height={200}alt='bakery' />
    </div>
    <div className='box'>
      <span>Food Website With Tailwind CSS</span>
      <p>Food Website designed from Figma with Next js and Tailwind css</p>
      
    <Image src='/three.png' width={300}height={200}alt='pro-pic' />
    </div>
    <div className='box'>
      <span>Coffee websites with HTML and CSS</span>
      <p>Atractive Coffee Website with HTML and CSS</p>
      
    <Image src='/one.png' width={300}height={200}alt='pro-pic' />
    </div>

  </div>
    </section>
  )
}

export default Projects