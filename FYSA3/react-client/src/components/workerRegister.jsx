import React, { Component } from "react";
import axios from "axios";

class WorkerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      location: "",
      prof: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/profs")
      .then((res) => {
        const profs = res.data;
        console.log("profs", profs);
        this.setState({ profs });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleClick(event) {
    event.preventDefault();
    var data = this.state;
    delete data.profs;
    console.log(data);
    axios
      .post("/workerRegister", { data })
      .then((res) => {
        console.log(res.data);
        this.props.handleSubmit("home");
      })
      .catch((err) => {
        console.log("There's an error", err);
      });
  }
  /// this for the worker create an account 
  render() {
    return (
      <div>
        <div>
          <div className="site-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-4 mx-auto">
                  <h2 className="line-bottom text-center">
                    Worker Registeration
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-3">
                  <div className="testimonial-3">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="quick-contact-form bg-white">
                      <h2>Please fill-in the form to register.</h2>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleChange}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="User name"
                          />
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.first_name}
                            name="first_name"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.last_name}
                            name="last_name"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="profs">Choose a prof:</label>
                          <select name="prof" onChange={this.handleChange}>
                            <option>Profession</option>
                            {this.state.profs.map((prof, index) => (
                              <option>{prof.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.phone}
                            name="phone"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            value={this.state.location}
                            name="location"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onClick={this.handleClick}
                            type="submit"
                            value="Create Profile"
                            className="btn btn-primary px-5"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerRegister;
