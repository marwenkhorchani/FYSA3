import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
                        // this for the nevbar of home page 
  render() {
    return (
      <div>
        <header className="site-navbar site-navbar-target" role="banner">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-3 ">
                <div className="site-logo">
                  <img className="main-logo" src="/images/logo.png" alt="" />
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
                      <a href="index.html" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.handleClick("user-signup");
                      }}>
                      <a className="nav-link">User Sign-Up</a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.handleClick("worker-signup");
                      }}>
                      <a className="nav-link">Worker Sign-Up</a>
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
export default Navbar;
