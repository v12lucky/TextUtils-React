import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props) {
  const [myStyle1] = useState({
    backgroundColor: 'blue'
  })
  const [myStyle2] = useState({
    backgroundColor: 'green'
  })
  const [myStyle3] = useState({
    backgroundColor: 'red'
  })
  const [myStyle4] = useState({
    backgroundColor: 'yellow'
  })
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" style={myStyle1} role="switch" id="flexSwitchCheckDefault1" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Blue-Dark Mode Enable</label>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" style={myStyle2} role="switch" id="flexSwitchCheckDefault2" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Green-Dark Mode Enable</label>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" style={myStyle3} role="switch" id="flexSwitchCheckDefault3" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Red-Dark Mode Enable</label>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode4} type="checkbox" style={myStyle4} role="switch" id="flexSwitchCheckDefault4" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault4">Yellow-Dark Mode Enable</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'set title here',
  about: 'About'
}