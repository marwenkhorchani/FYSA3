import React from "react";
import UserNavbar from "./UserNavbar.jsx";

class UserMyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
      // this for user profil 
  render() {
    return (
      <div>
        <UserNavbar handleClick={this.props.handleClick} />
        <div className="UserMyProfile ">
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
                    <h6>User</h6>
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
                          <label>Location</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.data.location}</p>
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

export default UserMyProfile;
