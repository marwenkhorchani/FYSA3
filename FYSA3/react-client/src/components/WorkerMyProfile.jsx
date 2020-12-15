import React from "react";
import WorkerNavbar from "./WorkerNavbar.jsx";

class WorkerMyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //this for the worker's profil    
  render() {
    return (
      <div>
        <WorkerNavbar handleClick={this.props.handleClick} />
        <div className="WorkerMyProfile ">
          <div className="container emp-profile  ">
            <form method="post">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                      alt=""
                    />
                    <div className="file btn btn-lg btn-primary">
                      Change Photo
                      <input type="file" name="file" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h5>
                      {this.props.data.first_name} {this.props.data.last_name}
                    </h5>
                    <h6>{this.props.data.prof}</h6>
                    <p className="proile-rating">
                      RANKINGS : <span>8/10</span>
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false">
                          Timeline
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <input
                    onClick={() => this.props.handleClick("update")}
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <label>UserName</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.username}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Full Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>
                            {this.props.data.first_name}{" "}
                            {this.props.data.last_name}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.phone}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.prof}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Location</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.location}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div className="col-md-6">
                          <p>10$/hr</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div className="col-md-6">
                          <p>230</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>English Level</label>
                        </div>
                        <div className="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Availability</label>
                        </div>
                        <div className="col-md-6">
                          <p>6 months</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label>Your Bio</label>
                          <br />
                          <p>Your detail description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerMyProfile;
