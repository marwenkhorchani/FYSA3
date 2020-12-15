import React from "react";
import axios from "axios";
class UserNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
   // this the navabar of profil user 
  render() {
    return (
      <div>
        <header
          className="site-navbar site-navbar-target userNavbar"
          role="banner">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-3 ">
                <div className="site-logo">
                  <a href="index.html">
                    <strong>FY</strong>Sa3{" "}
                    <span className="text-primary">.</span>{" "}
                  </a>
                </div>
              </div>

              <div className="col-9  text-right">
                <span className="d-inline-block d-lg-none">
                  <a
                    href="#"
                    className="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                    <span className="icon-menu h3 text-white"></span>
                  </a>
                </span>
                <nav
                  className="site-navigation text-right ml-auto d-none d-lg-block"
                  role="navigation">
                  <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <li className="active">
                      <a
                        onClick={() => {
                          this.props.handleClick("home");
                        }}
                        className="nav-link">
                        Home
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.handleClick("myprofil");
                      }}>
                      <a className="nav-link">Profil</a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.handleClick("orders");
                      }}>
                      <a className="nav-link">Orders</a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.handleClick("");
                      }}>
                      <a className="nav-link">Log Out </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default UserNavbar;
