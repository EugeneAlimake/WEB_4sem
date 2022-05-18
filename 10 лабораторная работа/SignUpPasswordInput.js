import React from "react";

export class SignUpPasswordInput extends React.Component {
  state = {
    password: "",
    disableBtn: true,
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleRepeat = (e) => {
    //this.setState({disablePass:true}, ()=> this.props.disablePass(this.state.disablePass))
    this.state.password === e.target.value
        ? this.setState({ disableBtn: false }, () =>
            this.props.disableBtn(this.state.disableBtn)
        )
        : this.setState({ disableBtn: true }, () =>
            this.props.disableBtn(this.state.disableBtn)
        );


  };
  checkPassword() {
    let password = this.state.password,
        check = 0,
        width = "0%";
    if (password.match(/\d/g)) check++;     //цифры от 0 до 9
    if (password.match(/[a-z]/g)) check++;  //буквы в нижнем регистре
    if (password.match(/[A-Z]/g)) check++;  //буквы в верхнем регистре
    if (password.match(/\W/g)) check++;     //Любой символ, кроме буквенного или цифрового символа или знака подчёркивания
    if (!password.length) width = "0%";
    else if (password.length < 6 && check < 4) width = "33%";
    else if (password.length < 6 && check >= 4) width = "66%";
    else if (password.length >= 8 && check < 4) width = "66%";
    else if (password.length >= 8 && check >= 4) width = "100%";
    else if (password.length >= 6 && check === 1) width = "33%";
    else if (password.length >= 6 && check > 1 && check < 5) width = "66%";
    else if (password.length >= 6 && check === 4) width = "100%";
    return (
        <div className="progress_bar_bg">
          <div className="progress_bar" style={{ width: width }} />
        </div>
    );
  }
  render() {
    return (
        <>
          <input
              type="password"
              placeholder="Password"
              onChange={this.handlePassword}
              className="inputs"
          />
          {this.checkPassword()}
          <input
              type="password"
              placeholder="Repeat password"
              onChange={this.handleRepeat}
              className="inputs"
          />
        </>
    );
  }
}
