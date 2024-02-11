import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <div className= {`${styles.design} mt-2`}>
      <div className='container w-75 vh-100'>
        <div className='row mt-5'>
          <div className='col-md-12 mt-5 py-5 text-center'>
            <h2 className='mx-auto'>ABOUT COMPONENT</h2>
            <i class='fa-solid fa-star'></i>
          </div>
          <div className='col-md-6'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            
          </div>
          <div className='col-md-6'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

          </div>
        </div>
      </div>
    </div>
  )
}
