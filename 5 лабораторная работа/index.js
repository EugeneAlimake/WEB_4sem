import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

export class SignUpForm extends React.Component {
    state = {
        disableBtn: false,
    }
    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
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
        for (let year = 1900; year < 2022; year++) {
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

    render() {
        return (
            <form>
                <input type="text" placeholder="Фамилия" />
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Отчество" />
                <input type="radio" name="sex" value="male" />муж
                <input type="radio" name="sex" value="female" />жен
                <SignUpEmailInput disableBtn={this.disableBtn} />
                <SignUpPasswordInput disableBtn={this.disableBtn} />
                <div >
                    {this.day()}
                    {this.month()}
                    {this.year()}
                </div>
                <br />
                <PhoneInput />
                <br />
                <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Отправить</button>
            </form>
        )
    }
}

export class SignUpPasswordInput extends React.Component {
  state = {
    password: "",
    disableBtn: true,
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleRepeat = (e) => {
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
    if (password.match(/\d/g)) check++;
    if (password.match(/[a-z]/g)) check++;
    if (password.match(/[A-Z]/g)) check++;
    if (password.match(/\W/g)) check++;
    if (!password.length) width = "0%";
    else if (password.length < 6 && check < 3) width = "33%";
    else if (password.length < 6 && check >= 3) width = "66%";
    else if (password.length >= 8 && check < 3) width = "66%";
    else if (password.length >= 8 && check >= 3) width = "100%";
    else if (password.length >= 6 && check === 1) width = "33%";
    else if (password.length >= 6 && check > 1 && check < 4) width = "66%";
    else if (password.length >= 6 && check === 4) width = "100%";
    return (
        <div className="password">
          <div className="password1" style={{ width: width }} />
        </div>
    );
  }
  render() {
    return (
        <>
          <input
              type="password"
              placeholder="Введите пароль"
              onChange={this.handlePassword}
          />
          {this.checkPassword()}
          <input
              type="password"
              placeholder="Повторите пароль"
              onChange={this.handleRepeat}
          />
        </>
    );
  }
}
export class SignUpEmailInput extends React.Component {
    state = {
        email: ""
    };
    inputHandler = (e) => {
        this.setState({ email: e.target.value });
        let check = /\S+@\S+\.\S+/,
            checked = check.test(e.target.value)
        this.props.disableBtn(!checked)
    };
    render() {
        return (
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.inputHandler}
            />
        );
    }
}
export class PhoneInput extends React.Component {
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
                            key={item.value}
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
                <label className="numberField">
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
                        placeholder="+375 (29) 000-00-00"
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
                this.inputs.map((item) => {
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
ReactDOM.render(
  <React.StrictMode>
<SignUpForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
