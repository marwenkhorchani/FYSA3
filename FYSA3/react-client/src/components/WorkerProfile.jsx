import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import Order from "./Order.jsx";

class WorkerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.order = this.order.bind(this);
  }

  order() {
    this.setState({ display: !this.state.display });
  }
      //this what the user see when he open the profil of worker 
  render() {
    if (!this.state.display) {
      return (
        <div>
          <UserNavbar handleClick={this.props.handleClick} />
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <img
                src="images/person_1.jpg"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid mb-4 w-10 rounded-circle"
              />
              <div className="info">
                <h2 className="text-black mb-4">Contact Info</h2>
                <div className="col-xl-4 mr-0">
                  <div className=" p-0 p-md-0">
                    <h3>
                      <ul className="list-unstyled footer-link">
                        <li className="d-block mb-3">
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Name:</span>
                            <span>
                              {this.props.data.first_name}_
                              {this.props.data.last_name}
                            </span>
                          </li>
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Email:</span>
                            <span>{this.props.data.email}</span>
                          </li>
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Phone:</span>
                            <span>{this.props.data.phone}</span>
                            <li className="d-block mb-3"></li>
                            <span className="d-block text-black">
                              Profession:
                            </span>
                            <span>{this.props.data.prof}</span>
                          </li>
                          <span className="d-block text-black">Location</span>
                          <span>{this.props.data.location}</span>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </div>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary btn-md text-white orderbtn"
                    onClick={this.order}>
                    Order
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <UserNavbar handleClick={this.props.handleClick} />
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <img
                src="images/person_1.jpg"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid mb-4 w-50 rounded-circle"
              />
              <div className="info">
                <h2 className="text-black mb-4">Contact Info</h2>
                <div className="col-xl-4 mr-0">
                  <div className=" p-0 p-md-0">
                    <h3>
                      <ul className="list-unstyled footer-link">
                        <li className="d-block mb-3">
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Name:</span>
                            <span>
                              {this.props.data.first_name}_
                              {this.props.data.last_name}
                            </span>
                          </li>
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Email:</span>
                            <span>{this.props.data.email}</span>
                          </li>
                          <li className="d-block mb-3">
                            <span className="d-block text-black">Phone:</span>
                            <span>{this.props.data.phone}</span>
                            <li className="d-block mb-3"></li>
                            <span className="d-block text-black">
                              Profession:
                            </span>
                            <span>{this.props.data.prof}</span>
                          </li>
                          <span className="d-block text-black">Location</span>
                          <span>{this.props.data.location}</span>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 orderform">
            <Order user={this.props.user} worker={this.props.data} />
          </div>
        </div>
      );
    }
  }
}

export default WorkerProfile;
