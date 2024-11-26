
import React from 'react'
import '@/components/style/skills.css'

const Skills = () => {
  return (
    <section id='skills'>
    <div className='section-info'>
    <h1><span>Skills</span></h1>
        <p>Who I am </p>
    </div>
    <div className='skills-row'>
        <div className='skills-left-col'>
            <p>
                 I am a passionate front-end developer dedicated to building visually compelling and user-friendly websites.
                  With expertise in modern HTML, CSS, TypeScript, and Next.js frameworks, I craft responsive and interactive interfaces
                  that elevate the user journey. My focus is on clean, efficient code and seamless designs, ensuring every website or
                  application is fast, accessible, and engaging across all devices. 
                </p>
                <div className='btn'>Read More</div>
        </div>
        <div className='skills-right-col'>
            <div className='progress-div'>
                <p>
                <span>HTML</span><br />
                <progress value={80} max={100}></progress>
                <span>80%</span>
                </p>
                <p>
                <span>CSS</span><br />
                <progress value={60} max={100}></progress>
                <span>60%</span>
                </p>
                <p>
                <span>TYPESCRIPT</span><br />
                <progress value={80} max={100}></progress>
                <span>80%</span>
                </p>
                <p>
                <span>TAILWIND CSS</span><br />
                <progress value={60} max={100}></progress>
                <span>60%</span>
                </p>
                <p>
                <span>NEXT JS</span><br />
                <progress value={50} max={100}></progress>
                <span>50%</span>
                </p>
                <p>
                <span>JAVASCRIPT</span><br />
                <progress value={70} max={100}></progress>
                <span>70%</span>
                </p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skills