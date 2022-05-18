import React from "react";
import PropTypes from "prop-types";
import { SignUpEmailInput } from "./SignUpEmailInput";
import { SignUpPasswordInput } from "./SignUpPasswordInput";
import { PhoneInput } from "./PhoneInput.js";

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disableBtn: true,disableEmail:true};
        //this.onChange = this.onChange.bind(this);
    }

    inputHandle = (e) => {
        let check = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            checked = check.test(e.target.value);
        if (checked===false) this.setState({disableBtn:true})
        else {
            this.setState({disableBtn:false})
        }
    };

    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
    }
    disableEmail = (value) => {
        this.setState({disableEmail: value})
        return this.state.disableEmail
    }

    Click(){
        alert("Success!");
    }

    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }
    month() {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }
    year() {
        let years = []
        for (let year = 1960; year < 2022; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }
  str = "some line";
  num = Number('111');
  sym = Symbol('111')
  render() {
    return (
      <form>
        <SignUpEmailInput
         disableEmail={this.disableEmail}
          months={this.months}
          parentState={this.state}
          str={this.str}
          num={this.num}
          sym={this.sym}
        />
        <SignUpPasswordInput disableBtn={this.disableBtn} />
        <input type="text" placeholder="Фамилия" onInput={this.inputHandle} />
        <input name="name" type="text" placeholder="Имя" onInput={this.inputHandle}/>
        <input type="text" placeholder="Отчество" onInput={this.inputHandle} />
        <input type="radio" name="gender" value="male" />
        муж
        <input type="radio" name="gender" value="female" />
        жен
        <div className="date">
          {this.day()}
          {this.month()}
          {this.year()}
        </div>
        <br />
        <PhoneInput />
        <br />
        <button disabled={(this.state.disableBtn+this.state.disableEmail)} onClick={this.Click} >
          Отправить
        </button>
      </form>
    );
  }
}


