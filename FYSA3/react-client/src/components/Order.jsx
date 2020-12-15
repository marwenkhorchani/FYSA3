import React from "react";
import axios from "axios";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user._id,
      worker_id: this.props.worker._id,
      info: "",
      date: "",
      state: "pending",
      location: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("hello");
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleClick() {
    var data = this.state;
    delete data.profs;
    console.log(data);
    axios
      .post("/addorder", { data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("There's an error", err);
      });
  }

    // this code for the order when the user send an order to the worker
  render() {
    return (
      <div className="container">
        <div className="order-messsage">
          <div className="col-md-12">
            <textarea
              onChange={this.handleChange}
              name="info"
              value={this.state.info}
              className="form-control"
              placeholder="Write your order."
              cols="30"
              rows="10"></textarea>
            <br></br>
            <input
              onChange={this.handleChange}
              name="date"
              type="Date"
              value={this.state.date}
              className="form-control"
              placeholder="Date"></input>
            <br></br>
            <input
              onChange={this.handleChange}
              name="location"
              type="text"
              value={this.state.location}
              className="form-control"
              placeholder="Location"></input>
            <br></br>
          </div>
          <input
            onClick={this.handleClick}
            type="submit"
            className="btn  btn-primary text-white py-2 px-5 sendorderbtn"
            value="Send Order"></input>
        </div>
      </div>
    );
  }
}

export default Order;
