import React, { Component } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" ><img className="radio" width="90px" src="https://pbs.twimg.com/profile_images/532920034058727424/51W_nlvs_400x400.jpeg" alt="" /></Link>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarColor01" style={{}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page" >INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/caballeros" >CABALLEROS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/damas" >DAMAS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">CONTÁCTANOS!</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">INICIAR SESIÓN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">REGISTRARSE</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar