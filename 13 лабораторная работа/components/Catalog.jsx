import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import OrderForm from "./OrderForm.jsx";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.array, isModalOpen: false, toOrder: false };
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
      weight: 1,
      added: 0
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
      weight: 5,
      added: 0
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
      weight: 3,
      added: 0
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
      weight: 10,
      added: 0
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
      weight: 50,
      added: 0
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
      weight: 20,
      added: 0
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
      weight: 5,
      added: 0
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
  onClickHandler(item, e) {
    this.props.addToCart(item);
    e.target.disabled = true;
    this.setState({isModalOpen: true});
  }
  goods() {
    return this.state.array.map((item) => {
      return (
        <div className="one_good" key={item.id}>
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">
              {item.new && <h2>New</h2>}
              <h2>{item.discount}%</h2>
              <button
                className="cart"
                onClick={(e) => this.onClickHandler(item, e)}
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
  toOrder = () => {
    this.setState({toOrder:true})
  }
  render() {
    return (
      !this.state.toOrder ?
      <>
        {this.sorts()}
        {this.goods()}
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal} toOrder={this.toOrder}/>,
          document.getElementById("portal")
        )}
        
      </>
      : <OrderForm />
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
