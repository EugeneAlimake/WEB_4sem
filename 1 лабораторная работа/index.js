import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const white = React.createElement('td', {className: 'white'});
const black=React.createElement('td',{className:'black'});
const response =
    [{
        stock_name:"EFX",
        company_name: "Equifax Inc",
        price: 163.55,
        currency: "USD",
        change: "+9.03"
    }, {
        stock_name: "IRM",
        company_name: "Iron Mountain Inc",
        price: 33.21,
        currency: "USD",
        change: "+1.42"
    }, {
        stock_name: "NTAP",
        company_name: "NetApp Inc",
        price: 54.81,
        currency: "USD",
        change: "-6.01"
    }, {
        stock_name: "CTL",
        company_name: "Centurylink Inc",
        price: 13.79,
        currency: "USD",
        change: "-1.37"
    }]

export class Table extends React.Component {
    table = response.map((item) => {
        return (
            <tr>
                <td>{item.stock_name}</td>
                <td>{item.company_name}</td>
                <td>{item.price}</td>
                <td>{item.currency}</td>
                <td style = {
                    {
                        background: Number(item.change) > 0 ? "green" : "red"
                    }
                }
                >{item.change}</td>
            </tr>
        );
    });

    render() {
        return this.table;
    }
}
let w1=<tr><th>1</th>{white}{black}{white}{black}{white}{black}{white}{black}<th>1</th></tr>
let w3=<tr><th>3</th>{white}{black}{white}{black}{white}{black}{white}{black}<th>3</th></tr>
let w5=<tr><th>5</th>{white}{black}{white}{black}{white}{black}{white}{black}<th>5</th></tr>
let w7=<tr><th>7</th>{white}{black}{white}{black}{white}{black}{white}{black}<th>7</th></tr>
let b2=<tr><th>2</th>{black}{white}{black}{white}{black}{white}{black}{white}<th>2</th></tr>
let b4=<tr><th>4</th>{black}{white}{black}{white}{black}{white}{black}{white}<th>4</th></tr>
let b6=<tr><th>6</th>{black}{white}{black}{white}{black}{white}{black}{white}<th>6</th></tr>
let b8=<tr><th>8</th>{black}{white}{black}{white}{black}{white}{black}{white}<th>8</th></tr>



export class Table1 extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th></th>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                        <th>d</th>
                        <th>e</th>
                        <th>f</th>
                        <th>g</th>
                        <th>h</th>
                        <th></th>
                    </tr>
                {w1}
                {b2}
                {w3}
                {b4}
                {w5}
                {b6}
                {w7}
                {b8}
                    <tr>
                        <th></th>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                        <th>d</th>
                        <th>e</th>
                        <th>f</th>
                        <th>g</th>
                        <th>h</th>
                        <th></th>
                    </tr>
                </table>
            </div>

        );
    }
    }

ReactDOM.render(<h1>Hello, world!</h1>,document.querySelector('#root'));
ReactDOM.render(<h3>{new Date(Date.now()).toString()}</h3>,document.querySelector('#root2'));
ReactDOM.render(<Table />,document.querySelector('#root3'));
ReactDOM.render(<Table1 />,document.querySelector('#root4'));


