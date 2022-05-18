import React from "react";
import { addToCart, deleteFromCart } from "../redux/actions";
import {connect } from "react-redux"
import { Link } from "react-router-dom";

class FirstPage extends React.Component {
  state={
    TooMuch: false,
      radiobtn: true
  }

  Button(e)
  {
      if (this.state.radiobtn===false) {
          this.setState({ radiobtn: true })};

      if (this.state.radiobtn===true) {
          this.setState({ radiobtn: false })};

  }
    checkboxOnChange(e, item) {
        if (e.target.checked)
        this.props.addToCart(item)
        else this.props.deleteFromCart(item)
    }
    inputOnChange(e, item) {
      for (let i = 0; i < this.props.goods.length; i++) {
        if (this.props.goods[i] === item) {
          this.props.goods[i].added = +e.target.value
        }
      }
      if (+e.target.value > item.inStock)
      return this.setState({TooMuch: true})
      return this.setState({TooMuch: false})
        if(+e.target.value==0)
        {

        }
    }
    total() {
        let total = 0;
        for (let i = 0; i < this.props.goods.length; i++) {
            total += (this.props.goods[i].price * (100 - this.props.goods[i].discount) * this.props.goods[i].added) / 100
        }
        return total;
    }
    withoutDisc() {
        let total = 0;
        for (let i = 0; i < this.props.goods.length; i++) {
            total += this.props.goods[i].price * this.props.goods[i].added
        }
        return total; 
    }
  render() {
    let goods = this.props.goods;
    return <>
          <div className="progress_bar_bg">
        <div className="progress_bar" style={{ width: "30%" }} />
      </div>
    {goods.map((item) => {
      return <div key={item.id} className="good_in_cart">
        <h3>Name:{item.name}</h3>
        <h4>Price:{(item.price * (100 - item.discount)) / 100}$</h4>
        <input type="number" name="numberOfGoods" disabled={this.state.radiobtn} defaultValue="0" onChange={(e) => this.inputOnChange(e, item)} />
        <input type="checkbox" value="inCart"  onClick={(e) => this.Button(e)}/>
        <button onClick={(e) => this.props.deleteFromCart(item)}>Delete item</button>
      </div>;
    })}
    {this.state.TooMuch && <h3 style={{color: "red"}}>Too Much Goods!</h3>}
    <h2>In total: {Math.round(this.total()*100) / 100}$</h2>
    <h4>Without discounts: {Math.round(this.withoutDisc()*100) / 100}$ </h4> 
    <Link to="/secondPage"><button>next page</button></Link>
    </>
  }
}
const mapStateToProps = (state) => {
  return {
      goods: state.goods
  }
}
const mapDispatchToProps = {
    deleteFromCart,
    addToCart
  };
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);