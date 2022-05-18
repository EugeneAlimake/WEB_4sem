import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
export class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Fullname: "Николаева Евгения Владимировна",
            birthDate: "17.07.2002",
            uniYear: "2020",
            faculty: "IT",
            group: "5",
            speciality: "POIT",
            email: "eugenealimake@gmail.com",
            phoneNumber: "80292834114",
        };
    }
    render() {
        return(
            this.props.render(this.state)
        )
    }
}
export class StudentInfoHandler extends React.Component {
    age(student) {
        let currentDate = new Date(),
            birthDate = student.birthDate.replace(/[^0-9]+/g, ""),
            birthYear = birthDate % 10000,
            birthMonth = Math.round((birthDate / 10000) % 100),
            birthDay = Math.round(birthDate / 1000000),
            age = currentDate.getFullYear() - birthYear;
        if (currentDate.getMonth() < birthMonth - 1) age--;
        if (
            birthMonth - 1 === currentDate.getMonth() &&
            currentDate.getDate() < birthDay
        )
            age--;
        return age;
    }
    cours(student) {
        let currentDate = new Date(),
            cours = currentDate.getFullYear() - student.uniYear;
        if (currentDate.getMonth() > 8) cours++;
        if (cours > 4) cours = "Окончил университет";
        return cours;
    }
    mailOperator(student) {
        return student.email.split("@")[1];
    }
    phoneOperator(student) {
        let operators = [
                {
                    name: "A1 (Velcom)",
                    code: 29,
                    firstNumber: [1, 3, 6, 9],
                },
                {
                    name: "МТС",
                    code: 29,
                    firstNumber: [2, 5, 7, 8],
                },
                {
                    name: "A1 (Velcom)",
                    code: 44,
                },
                {
                    name: "МТС",
                    code: 33,
                },
                {
                    name: "life :)",
                    code: 25,
                },
                {
                    name: "Городской",
                    code: 17,
                },
            ],
            phone = student.phoneNumber,
            position,
            code,
            operator;
        if (phone[0] === "+") position = 4;
        if (phone[0] === "8") position = 2;
        code = +phone.slice(position, position + 2);

        operators.map((item) => {
            if (item.code === code && code === 29) {
                let firstNum = +phone.slice(position + 2, position + 3);
                for (let i = 0; i < item.firstNumber.length; i++) {
                    if (firstNum === item.firstNumber[i])
                    {
                        return operator = item.name;
                    }
                }
            }
            else if (item.code === code)
                return operator = item.name;
        });
        return operator;
    }
    render() {
        return (
            <StudentInfo
                render={(student) => (
                    <table>
                        <tbody>
                        <tr>
                            <td>ФИО</td>
                            <td>{student.Fullname}</td>
                        </tr>
                        <tr>
                            <td>Текущий возраст</td>
                            <td>{this.age(student)}</td>
                        </tr>
                        <tr>
                            <td>Факультет, курс, группа</td>
                            <td>
                                {student.faculty}, {this.cours(student)}, {student.group}
                            </td>
                        </tr>
                        <tr>
                            <td>Специальность</td>
                            <td>{student.speciality}</td>
                        </tr>
                        <tr>
                            <td>Электронная почта</td>
                            <td>{student.email}</td>
                        </tr>
                        <tr>
                            <td>Оператор услуг ЭП</td>
                            <td>{this.mailOperator(student)}</td>
                        </tr>
                        <tr>
                            <td>Номер телефона</td>
                            <td>{student.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Оператор услуг МС</td>
                            <td>{this.phoneOperator(student)}</td>
                        </tr>
                        </tbody>
                    </table>
                )}
            />
        );
    }
}
export class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: "",
            desc: "",
            notes: [],
        };
    }
    style(length) {
        if (length > 8) {
            return { background: "red" };
        }
        return { background: "yellow" };
    }
    titleHandle = (e) => {
        this.setState({ title: e.target.value });
    };
    descHandle = (e) => {
        this.setState({ desc: e.target.value });
    };
    addNote = () => {
        this.setState({
            notes: [
                ...this.state.notes,
                {
                    title: this.state.title,
                    date: this.state.date,
                    desc: this.state.desc,
                },
            ],
            title: "",
            date: "",
            desc: "",
        });
    };
    deleteFirst = () => {
        this.setState({notes: this.state.notes.slice(0, this.state.notes.length)})
    }
    deleteLast = () => {
        this.setState({notes: this.state.notes.slice(0, this.state.notes.length )})
    }
    render() {
        let length = 0;
        return (
            <>
                <form>
                    <input
                        type="text"
                        placeholder="Заголовок"
                        onChange={this.titleHandle}
                        value={this.state.title}
                    />
                    <input
                        type="text"
                        placeholder="Дата"
                        onChange={this.dateHandle}
                        value={this.state.date}
                    />
                    <textarea
                        placeholder="Записка"
                        onChange={this.descHandle}
                        value={this.state.desc}
                    />
                </form>
                <button onClick={this.addNote}>Добавить</button>
                {this.state.notes.length > 3 && (
                    <>
                        <button onClick={this.deleteFirst}>delete first</button>
                        <button onClick={this.deleteLast}>delete last</button>
                    </>
                )}
                {this.state.notes.map((item) => {
                    length++;
                    return (
                        <div key={item.title} className="notes" style={this.style(length)}>
                            <p>{length >= 7 && "Too much notes"}</p>
                            <h3>{item.title}</h3>
                            <h4>{item.date}</h4>
                            <p>{item.desc}</p>
                        </div>
                    );
                })}
            </>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <StudentInfoHandler />
      <br/>
      <Notes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
