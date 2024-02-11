import React from 'react'
import styles from './Portfolio.module.css'
import img1 from './../../assets/poert1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'
export default function Portfolio() {
  return (
    <div className='mt-5 mb-5'>
      <div className='container  w-75 mt-5  pb-5'>
        <div className='row g-5 mt-5 mb-5 pb-5'>
          <div className='col-md-12 text-center'>
            <h2 className={`${styles.collor}`}>PORTFOLIO COMPONENT</h2>
            <i class='fa-solid fa-star'></i>
          </div>
          <div className='col-md-4 position-relative'>
            <img src={img1} className='w-100' alt="" />
            <div className= {`${styles.layer} position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-content-center`}></div>
          </div>
          <div className='col-md-4'>
            <img src={img2} className='w-100' alt="" />
          </div>
          <div className='col-md-4'>
            <img src={img3} className='w-100' alt="" />
          </div>
          <div className='col-md-4'>
            <img src={img1} className='w-100' alt="" />
          </div>
          <div className='col-md-4'>
            <img src={img2} className='w-100' alt="" />
          </div>
          <div className='col-md-4'>
            <img src={img3} className='w-100' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
