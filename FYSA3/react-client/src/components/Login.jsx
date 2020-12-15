import React from "react";
import axios from "axios";

class WorkerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
    // this for log in users and workers 
  render() {
    return (
      <div>
        <div className="col-md-6">
          <div className="quick-contact-form bg-white">
            <h2>Log In</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Log In"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.handleLogin(this.state);
                  }}
                  className="btn btn-primary px-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerLogin;
