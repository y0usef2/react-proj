import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
export default class Navbar extends Component {
  render() {
    return (
      <nav className={`${styles.color} navbar navbar-expand-lg fixed-top mt-0 `}>
  <div className="container  py-3">
    <Link to={''} className="navbar-brand me-auto text-white fs-3 fw-bold" >START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse h6" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link to={'about'} className="nav-link active text-white" aria-current="page" >About</Link>
        </li>
        <li className="nav-item">
          <Link to={'portfolio'} className="nav-link text-white" >Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to={'contact'} className="nav-link text-white" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
