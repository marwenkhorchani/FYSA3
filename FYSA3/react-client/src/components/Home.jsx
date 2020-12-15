import React from "react";
import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
              // this for the home page 
  render() {
    return (
      <div>
        <div className="site-wrap" id="home-section">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          <Navbar handleClick={this.props.handleClick} />
          <div className="ftco-blocks-cover-1">
            <div
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <h1 className="line-bottom">
                      Digitals-Dealers are at your service.
                    </h1>
                  </div>
                  <div className="col-lg-5 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pr-md-5 mr-auto">
                  <h2 className="line-bottom">
                    If You Don't Have Time And You Need Help .Just Communicate
                    With FYSA3
                  </h2>
                  <p>
                    With FYSA3 you can get help in the shortest time and in the
                    best way , All you need is to visit our website .
                  </p>
                </div>
                <Login handleLogin={this.props.handleLogin} />
              </div>
            </div>
          </div>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <img
                    className="main-logo-footer"
                    src="/images/logo.png"
                    alt=""
                  />
                  <p>
                    Digital-Dealers group thanks you and invites you to visit
                    the rest of its websites , enjoy our services .
                  </p>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i
                        className="icon-heart text-danger"
                        aria-hidden="true"></i>{" "}
                      by Digital Dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
