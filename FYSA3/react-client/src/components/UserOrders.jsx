import React from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar.jsx";

class UserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  componentDidMount() {
    var data = this.props.user._id;
    axios
      .post("/api/orders/user", { data })
      .then((res) => {
        const orders = res.data;
        console.log("orders", orders);
        this.setState({ orders });
      })
      .catch((err) => {
        console.log(err);
      });
  }
   // this for the orders of user he send it to the worker 
  render() {
    return (
      <div>
        <UserNavbar handleClick={this.props.handleClick} />
        <div className="userorders">
          <div className="workerfeed ">
            <div className="pendingorders container">
              <h1>Orders</h1>
              <table className="table table-striped orders">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Worker</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map((element, index) => {
                    return (
                      <tr>
                        <th scope="row">{index}</th>
                        <td>
                          {element.worker_id.first_name}{" "}
                          {element.worker_id.last_name}
                        </td>
                        <td>{element.info}</td>
                        <td>{element.location}</td>
                        <td>{element.date}</td>
                        <td>{element.state}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserOrders;
