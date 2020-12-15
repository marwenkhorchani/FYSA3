import React from "react";
import UserNavbar from "./UserNavbar.jsx";

class WorkersList extends React.Component {
  constructor(props) {
    super(props);
  }
   /// this for the worker list , this list can the user find it when we open one of the list of prof 
  render() {
    return (
      <div>
        <UserNavbar handleClick={this.props.handleClick} />
        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-center text-center mb-5 section-2-title">
              <div className="col-md-6">
                <h2 className="mb-4">Workers Who Are Available</h2>
                <p>
                  All you need is to choose a worker and send him an order and
                  waiting for his accept
                </p>
              </div>
            </div>

            {this.props.data.map((element) => {
              return (
                <div
                  onClick={() => {
                    this.props.handleProfileClick(element);
                    this.props.handleClick("worker-profile");
                  }}
                  className="row align-items-stretch">
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="post-entry-1 h-100 person-1">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />

                      <div className="post-entry-1-contents">
                        <span className="meta">{element.prof}</span>
                        <h2>
                          {element.first_name}
                          {element.last_name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkersList;
