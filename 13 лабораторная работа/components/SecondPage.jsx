import React from "react";
import { deliveryMethod, paymentMethod, address } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SecondPage extends React.Component {
  state = {
    address: true,
  };
  radiobuttonsHandler(e) {
    if (e.target.value === "myself") {
      this.setState({ address: false });
    }
    if (e.target.name === "delivery") {
      return this.props.deliveryMethod(e.target.value);
    }
    return this.props.paymentMethod(e.target.value);
  }
  addressHandler = (e) => {
    this.props.address(e.target.value);
  };
  render() {
    return (
      <>
        <div className="progress_bar_bg">
          <div
            className="progress_bar"
            style={{ width: "66%" }}
          />
        </div>
        <ul className="delivery">
          <li>
            <input
              type="radio"
              name="delivery"
              value="courier"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By courier
          </li>
          <li>
            <input
              type="radio"
              name="delivery"
              value="post"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By post
          </li>
          <li>
            <input
              type="radio"
              name="delivery"
              value="myself"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By myself
          </li>
          <li>
            Address
            <input
              type="text"
              disabled={!this.state.address}
              onChange={this.addressHandler}
            />
          </li>
        </ul>
        <ul className="payment">
          <li>
            <input
              type="radio"
              name="payment"
              value="cash"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By cash
          </li>

          <li>
            <input
              type="radio"
              name="payment"
              value="creditCard"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By credit card
          </li>

          <li>
            <input
              type="radio"
              name="payment"
              value="transfer"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            By transfer
          </li>
        </ul>
        <Link to="/">
          <button>prev page</button>
        </Link>
        <Link to="/thirdPage">
          <button>next page</button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};
const mapDispatchToProps = {
  deliveryMethod,
  paymentMethod,
  address,
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
