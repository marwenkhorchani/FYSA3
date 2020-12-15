import React from "react";
import UserNavbar from "./UserNavbar.jsx";
import axios from "axios";
import WorkersList from "./WorkersList.jsx";
import WorkerProfile from "./WorkerProfile.jsx";
import UserMyProfile from "./UserMyProfile.jsx";
import UserOrders from "./UserOrders.jsx";
import UserUpdate from "./UserUpdate.jsx";
class UserFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.data,
      profs: [],
      current: [],
      currentprofile: {},
      view: "home"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }
  handleClick(view) {
    this.setState({ view });
  }
  handleProfileClick(currentprofile) {
    this.state.currentprofile = currentprofile;
  }

  componentDidMount() {
    console.log(this.props.data);
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
            // this for user feed when the user log in he find a list of prof 
  render() {
    if (this.state.view === "home") {
      return (
        <div>
          <UserNavbar handleClick={this.handleClick} />
          <div className="site-section" style={{ backgroundColor: "#dedffe" }}>
            <div className="container">
              <div className="row align-items-stretch">
                {this.state.profs.map((element) => {
                  return (
                    <div
                      onClick={() => {
                        this.state.current = element.workers;
                        this.handleClick("list");
                      }}
                      className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                      <div className="service-2 h-100">
                        <div className="svg">
                          <img src={element.img} alt="Image" className="" />
                        </div>

                        <h3>
                          <span>{element.name}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view === "list") {
      return (
        <div>
          <WorkersList
            handleClick={this.handleClick}
            handleProfileClick={this.handleProfileClick}
            data={this.state.current}
          />
        </div>
      );
    } else if (this.state.view === "worker-profile") {
      return (
        <div>
          <WorkerProfile
            handleClick={this.handleClick}
            user={this.state.user}
            data={this.state.currentprofile}
          />
        </div>
      );
    } else if (this.state.view === "myprofil") {
      return (
        <UserMyProfile handleClick={this.handleClick} data={this.props.data} />
      );
    } else if (this.state.view === "orders") {
      return (
        <UserOrders
          handleClick={this.handleClick}
          handleClick={this.handleClick}
          user={this.state.user}
        />
      );
    } else if (this.state.view === "update") {
      return (
        <div>
          <UserNavbar handleClick={this.handleClick} />
          <UserUpdate handleClick={this.handleClick} user={this.state.user} />
        </div>
      );
    }
  }
}
export default UserFeed;
