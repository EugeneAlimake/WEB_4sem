import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.array, isModalOpen: false };
  }
  array = [
    {
      id: "Milk",
      name: "Milk",
      price: 0.8,
      inStock: 4,
      img: "/imgs/milk.jpg",
      desc: "Малако",
      new: true,
      discount: 20,
    },
    {
      id: "Butter",
      name: "Butter",
      price: 1.3,
      inStock: 13,
      img: "/imgs/butter.jpg",
      desc: "Масла",
      new: true,
      discount: 10,
    },
    {
      id: "Coffee",
      name: "Coffee",
      price: 12,
      inStock: 23,
      img: "/imgs/coffee.jpg",
      desc: "Кава",
      new: false,
      discount: 40,
    },
    {
      id: "Tea",
      name: "Tea",
      price: 13,
      inStock: 2,
      img: "/imgs/tea.jpg",
      desc: "Гарбата",
      new: false,
      discount: 15,
    },
    {
      id: "Sugar",
      name: "Sugar",
      price: 1.2,
      inStock: 0,
      img: "/imgs/sugar.jpg",
      desc: "Цукар",
      new: false,
      discount: 30,
    },
    {
      id: "Apples",
      name: "Apples",
      price: 1,
      inStock: 16,
      img: "/imgs/apples.jpg",
      desc: "Яблыкi",
      new: false,
      discount: 25,
    },
    {
      id: "Cheese",
      name: "Cheese",
      price: 10,
      inStock: 9,
      img: "/imgs/cheese.jpg",
      desc: "Сыр",
      new: false,
      discount: 5,
    },
  ];
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      arrayCopy = [...this.state.array].sort(function (a, b) {
        if (a.new || b.new) return 0;
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: arrayCopy });
  }
  sorts() {
    return (
      <div className="sorts">
        <button onClick={() => this.sort("name")}>Name</button>
        <button onClick={() => this.sort("price")}>Price</button>
        <button onClick={() => this.sort("inStock")}>In Stock</button>
        <button onClick={() => this.sort("discount")}>Discount</button>
      </div>
    );
  }
  onClickHandler(item) {
    this.props.addToCart(item);
    let newItem = item;
    newItem.inStock-=1;
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] === item)
    this.setState({array: [...this.state.array.slice(0, i), newItem, ...this.state.array.slice(i+1)]})      
    }
    this.setState({isModalOpen: true});
  }
  goods() {
    return [].concat(this.state.array)
        .sort((a,b)=>a.new<b.new?1:-1)
        .map((item) =>  {
      return (
        <div className="one_good" key={item.id}>
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">
              {item.new && <h2>New</h2>}
              <h2>{item.discount}%</h2>
              <button
                className="cart"
                onClick={() => this.onClickHandler(item)}
                disabled={!item.inStock}
              >
                add to cart
              </button>
            </div>
            <h2>{item.name}</h2>
            <div className="prices">
              {item.discount && (
                <h2>{(item.price * (100 - item.discount)) / 100}$</h2>
              )}
              <h3>{item.price}$</h3>
            </div>
            <h4>Available: {item.inStock} items</h4>
            <div>{item.desc}</div>
          </div>
        </div>
      );
    });
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  render() {
    return (
      <>
        {this.sorts()}
        {this.goods()}
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal}/>,
          document.getElementById("portal")
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
