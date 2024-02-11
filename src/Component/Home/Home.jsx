import React from 'react';
import styles from './Home.module.css'
import home from './../../assets/avataaars.svg'
export default function Home() {
  return (
    <div className={`${styles.All} pt-2`}>
    <div className={`${styles.all} container  d-flex py-5 mt-5`}>
      <div className='justify-content-center align-content-center text-center mx-auto'>
        <img src={home} className='w-75 mx-auto' alt="" />
        <h2 className='pt-3'>START FRAMEWORK</h2>
        <div ><i className={`${styles.stars} fa-solid fa-star position-relative`}></i></div>
        <div className='py-2'><p>Graphic Artist - Web Designer - Illustrator</p></div>
      </div>
    </div>
    </div>
    
  )
}
