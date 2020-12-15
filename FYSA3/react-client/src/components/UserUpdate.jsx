import React from "react";
import axios from "axios";

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.user._id,
      username: this.props.user.username,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      phone: this.props.user.phone,
      location: this.props.user.location,
      password: this.props.user.password,
      __v: this.props.user.__v
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(event) {
    event.preventDefault();
    var data = this.state;
    console.log(data);
    axios
      .put("/user/update", { data })
      .then((res) => {
        this.props.handleClick("myprofil");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("There's an error", err);
      });
  }

   // this for the updating user's profil 
  render() {
    return (
      <div>
        <div className="wrapper bg-white mt-sm-5 container">
          <h4 className="pb-4 border-bottom">Account settings</h4>
          <div className="py-2">
            <div className="row py-2">
              <div className="col-md-6">
                {" "}
                <label htmlFor="firstname">First Name</label>{" "}
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="first_name"
                  className="bg-light form-control"
                  value={this.state.first_name}
                />{" "}
              </div>
              <div className="col-md-6 pt-md-0 pt-3">
                {" "}
                <label htmlFor="lastname">Last Name</label>{" "}
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="last_name"
                  className="bg-light form-control"
                  value={this.state.last_name}
                />{" "}
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6">
                {" "}
                <label htmlFor="email">Email Address</label>{" "}
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  className="bg-light form-control"
                  value={this.state.email}
                />{" "}
              </div>
              <div className="col-md-6 pt-md-0 pt-3">
                {" "}
                <label htmlFor="phone">Phone Number</label>{" "}
                <input
                  onChange={this.handleChange}
                  name="phone"
                  type="tel"
                  className="bg-light form-control"
                  value={this.state.phone}
                />{" "}
              </div>
              <div className="col-md-6 pt-md-0 pt-3">
                {" "}
                <label htmlFor="location">Location</label>{" "}
                <input
                  onChange={this.handleChange}
                  name="location"
                  type="location"
                  className="bg-light form-control"
                  value={this.state.location}
                />{" "}
              </div>
            </div>
            <div className="py-3 pb-4 border-bottom">
              {" "}
              <button
                onClick={this.handleClick}
                className="btn btn-primary mr-3">
                Save Changes
              </button>{" "}
              <button className="btn border button">Cancel</button>{" "}
            </div>
            <div className="d-sm-flex align-items-center pt-3" id="deactivate">
              <div>
                {" "}
                <b>Deactivate your account</b>
                <p>Details about your company account and password</p>
              </div>
              <div className="ml-auto">
                {" "}
                <button className="btn danger">Deactivate</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserUpdate;
