import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
                </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">login</a>
                  </li> 
                  <li className="nav-item">
                  <a className="nav-link" href="/sign">SignUp</a>
                 </li>
                  
                
             
                 
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
            </div>
        )
    }
}
