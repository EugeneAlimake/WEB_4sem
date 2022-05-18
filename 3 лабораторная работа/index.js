import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Component } from "react";


export class PhoneInput extends Component {
    state = {
        number: "",
        showTheList: false,
        value: "Беларусь",
        img: "/images/bel.jpg",
        mask: "XXXX (XX) XXX-XX-XX",
        count: 13,
    };
    inputs = [
        {
            value: "Беларусь",
            code: "+375",
            img: "/images/bel.jpg",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Украина",
            code: "+380",
            img: "/images/uk.png",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Россия",
            code: "+7",
            img: "/images/rus.png",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
        {
            value: "Польша",
            code: "+48",
            img: "/images/poland.png",
            mask: "XXX XXX-XXX-XXX",
            count: 12,
        },
        {
            value: "Литва",
            code: "+370",
            img: "/images/lithuania.png",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Латвия",
            code: "+371",
            img: "/images/latvia.png",
            mask: "XXXX XXXX-XXXX",
            count: 12,
        },
        {
            value: "Канада",
            code: "+1",
            img: "/images/canada.jpg",
            mask: "XX XXX XXXX-XXXX",
            count: 12,
        },
    ];
    theList() {
        return (
            <ul>
                {this.inputs.map((item) => {
                    return (
                        <li
                            onClick={() =>
                                this.setState({
                                    number: item.code,
                                    showTheList: false,
                                    img: item.img,
                                    mask: item.mask,
                                    count: item.count,
                                })
                            }
                           // key={item.value}
                        >
                            <img
                                src={item.img}
                                alt=""
                            />
                            <label>
                                <input type="radio" name="country" value={item.value} />
                                {item.value}
                                {item.code}
                            </label>
                        </li>
                    );
                })}
            </ul>
        );
    }

    numberField() {
        return (
            <>
                <label>
                    <img
                        src={this.state.img}
                        style={{
                            height: "15px",
                            width: "30px",
                        }}
                        alt=""
                    />
                    <input
                        onClick={() =>
                            this.setState({ showTheList: !this.state.showTheList })
                        }
                        id="number"
                        type="tel"
                        name="myPhone"
                        placeholder="+375 (33) 000-00-00"
                        value={this.state.number}
                        onChange={this.handleNumberChange}
                        maxLength={this.state.count}
                    />
                </label>
            </>
        );
    }
    handleNumberChange = (e) => {
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.inputs.forEach((item) => {
                    if (this.state.number === item.code)
                        this.setState({
                            value: item.value,
                            img: item.img,
                            mask: item.mask,
                            count: item.count,
                        });
                });

                if (this.state.count === this.state.number.length) {
                    let maskArr = this.state.mask.split(""),
                        numberArr = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskArr.length; i++)
                        if (maskArr[i] === "X") {
                            maskArr[i] = numberArr[j];
                            j++;
                        }
                    let number = maskArr.join("");
                    this.setState({ number: number });
                }
            }
        );
    };
    render() {
        return (
            <>
                {this.numberField()}
                {this.state.showTheList ? this.theList() : null}
            </>
        );
    }
}

export class SortTable extends Component
{
   constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, in_stock: true };
        this.state = {array: this.shop};
    }

    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            goodsCopy = [...this.shop].sort(function (a, b) {
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: goodsCopy });
    }
    head = [
        <tr>
            <td>№</td>
            <td className="name">
                <button className="name" onClick={() => this.sort("name")}>Name</button>
            </td>
            <td className="small">
                <button className="small" onClick={() => this.sort("price")}>Price</button>
            </td>
            <td className="small">
                <button className="small" onClick={() => this.sort("in_stock")}>In Stock</button>
            </td>
        </tr>,
    ];
shop=[
    {
        name: "Butter",
        price: "0.9",
        in_stock: 99,
    },
    {
        name: "Cheese",
        price: "4.9",
        in_stock: 20,
    },
    {
        name: "Fancy French Cheese",
        price: "99",
        in_stock: 0,
    },
    {
        name: "Heavy Cream",
        price: "3.9",
        in_stock: 2,
    },
    {
        name: "Milk",
        price: "1.9",
        in_stock: 1,
    },
    {
        name: "Sour Cream",
        price: "2.9",
        in_stock: 86,
    },
    {
        name: "Yoghurt",
        price: "2.4",
        in_stock: 12,
    },
]
    table ()  {
        let stringNumber = 0;
    return this.state.array.map((item)=>{
        let inStockStyle = {};
        if (+item.in_stock < 3) inStockStyle = {background: "yellow" };
        if (+item.in_stock === 0) inStockStyle = {background: "red" };
        return(<tr>
                <td>{++stringNumber}</td>
                <td className="name">{item.name}</td>
                <td className="small">{item.price}</td>
                <td style={{background: (item.in_stock) === 0 ? "red":(item.in_stock)<3?"yellow":"white"}}>
                {item.in_stock}</td>
            </tr>);
   } )};

    render() {
        return (
            <table>
                {this.head}
                {this.table()}
            </table>
        );

}
}
ReactDOM.render(
  <React.StrictMode>
    <PhoneInput />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <SortTable />
    </React.StrictMode>,
    document.getElementById('root1')
);

reportWebVitals();
