import React from 'react'
import '@/components/style/contact.css'



const Contact = () => {
  return (
    <section id='contact'>
   <h1 className='header'><span>Contact</span></h1>
        {/* Contact Form */}
        <div className="contact-form"></div>
          <form action="#">
            <h2> <span>Send Message </span></h2>
            <div className="input-box">
              <input
                type="text"
                required
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Your Subject..."
                aria-label="Subject"
                required
              />
            </div>
            <div className="input-box">
              <textarea
                placeholder="Type Your Message..."
                aria-label="Type Your Message"
                rows={10}
                required
              ></textarea>
            </div>
            <button className='btn' type='submit'>
              Submit
             </button>  
          </form>
    </section>
  );
}

export default Contact