import React from "react";
import { SignUpEmailInput } from "./SignUpEmailInput";
import { SignUpPasswordInput } from "./SignUpPasswordInput";
import { PhoneInput } from "./PhoneInput.js";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions";
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";
class SignUpForm extends React.Component {
  state = {
    disableBtn: true, password: null, login: null, showSignUp: true
  };
  disableBtn = (value) => {
    this.setState({ disableBtn: value });
    return this.state.disableBtn;
  };
  day() {
    let days = [];
    for (let day = 1; day < 32; day++) {
      days.push(<option key={day}>{day}</option>);
    }
    return <select>{days}</select>;
  }
  months = [
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
  ];
  month() {
    return (
      <select>
        {this.months.map((month) => {
          return <option key={month}>{month}</option>;
        })}
      </select>
    );
  }
  year() {
    let years = [];
    for (let year = 1960; year < 2021; year++) {
      years.push(<option key={year}>{year}</option>);
    }
    return <select>{years}</select>;
  }
  handleBtnClick = (e) => {
    e.preventDefault();
    this.props.signUp(this.state.login, this.state.password);
    this.setState({showSignUp: false})
  };
  logAndPass = (e, target) => {
    this.setState({[target]: e.target.value})
  };
  in = (st) => {
    if (st) return this.setState({showIn: true})
  }
  render() {
    return (
      <>
      <form>
        <SignUpEmailInput
          disableBtn={this.disableBtn}
          disabledBtn={this.state.disableBtn}
          logAndPass={this.logAndPass}
        />
        <SignUpPasswordInput
          disableBtn={this.disableBtn}
          logAndPass={this.logAndPass}
        />
        <input type="text" placeholder="Фамилия" />
        <input name="name" type="text" placeholder="Имя" />
        <input type="text" placeholder="Отчество" />
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
        <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>
          <Link to="/signIn">send</Link>
        </button>
      </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  signUp,
};
export default connect(null, mapDispatchToProps)(SignUpForm);
