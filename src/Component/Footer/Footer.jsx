import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div className={`${styles.backGr} fixed-bottom mt-5`} >
    <div className="container w-75 ">
        <div className="row text-white py-3">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center text-white">
                <h3>AROUND THE WEB</h3>
                <div className=""><ul className='d-flex fs-3 ms-stert text-white'>
                <li><i class="fa-brands fa-facebook text-white"></i></li>
                <li><i class="fa-brands fa-twitter text-white"></i></li>
                <li><i class="fa-brands fa-linkedin-in text-white"></i></li>
                <li><i class="fa-solid fa-globe text-white"></i></li>
                </ul></div>
            </div>
            <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            
        </div>
    </div>
    <div className='row'>
    <div className= {`${styles.colfoot} col-md-12 text-center text-white py-3`}>Copyright © Your Website 2021</div>
    </div>
    
  </div>
    
  )
}
