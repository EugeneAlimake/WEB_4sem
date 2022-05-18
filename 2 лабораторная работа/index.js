import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Component } from "react";
import reportWebVitals from "./reportWebVitals";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    //метод жизненного цикла
    //что-то вроде таймера
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    //здесь мы уничтожаем таймер
    clearInterval(this.timerID);
  }

  tick() {
    //Сlock запускается каждую секунду
    this.setState({
      date: new Date(),
    });
  }

  view() {
    let format, timezone;
    let min, hour, second;
    let dopvar = 0;

    if (this.props.timezone) {
      hour = this.state.date.getUTCHours();
      min = this.state.date.getUTCMinutes();

      timezone = this.props.timezone.replace(/[^\d.-]+/g, "");
      timezone = timezone % 100;
      min += timezone;
      if (min >= 60) {
        min = min - 60;
        dopvar = dopvar + 1;
      }
      if (min < 0) {
        min = min + 60;
        dopvar = -1;
      }
      timezone = parseInt(this.props.timezone, 10);
      hour += timezone;
      if (this.props.format) {
        format = this.props.format;
        if (format == "12") {
          hour = hour % 12;
        }
      } else {
        format = "24";
      }
    } else {
      min = this.state.date.getMinutes();
      hour = this.state.date.getHours();
      if (this.props.format) {
        format = this.props.format;
        if (format == "12") {
          hour = hour % 12;
        }
      } else {
        format = "24";
      }
    }

    hour += dopvar;
    second = this.state.date.getUTCSeconds();
    return `${hour}:${min}:${second}`;
  }
  render() {
    return (
      <div>
        <h1>1 Задание</h1>
        <h2>Сейчас {this.view()}.</h2>
      </div>
    );
  }
}

export class SelectJob extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.selected = this.selected.bind(this);
  }
  jobs = [
    { value: "", job: "Выберите" },
    { value: "Programmer", job: "Программист" },
    { value: "Doctor", job: "Врач" },
    { value: "Psychologist", job: "Психолог" },
    { value: "Baker", job: "Пекарь" },
    { value: "Sommelier", job: "Сомелье" },
  ];
  selected(el) {
    return this.setState({ value: el.target.value });
  }
  render() {
    return (
      <>
        <h2>Выберите профессию</h2>
        <select onChange={this.selected}>
          {this.jobs.map((item) => {
            return <option value={item.value}>{item.job}</option>;
          })}
        </select>
        <JobMenu value={this.state.value} />
      </>
    );
  }
}

class JobMenu extends Component {
  switchCase() {
    let links = [],
      value = this.props.value;

    switch (value) {
      case "Doctor":
        links.push(
          "https://www.msdmanuals.com/ru/",
          "https://www.who.int/",
          "https://pubmed.ncbi.nlm.nih.gov/",
          "https://www.wolterskluwer.com",
          "https://www.mayoclinic.org",
          "https://www.drugs.com",
          "https://www.bmj.com"
        );
        break;
      case "Programmer":
        links.push(
          "https://learn.javascript.ru/",
          "https://timeweb.com/ru/",
          "http://iguania.ru/",
          "http://all4forweb.ru/forum/36/",
          "http://vbzero.narod.ru/part1.htm/",
          "http://ruseller.com/",
          "http://habrahabr.ru/post/143737/"
        );
        break;
      case "Psychologist":
        links.push(
          "http://www.psychologies.ru/",
          "http://psychojournal.ru/",
          "https://psy-practice.com/",
          "http://psychologytoday.ru/",
          "https://monocler.ru/category/psychology/",
          "http://artpsiholog.ru/",
          "https://therapist.bemeta.co/"
        );
        break;
      case "Baker":
        links.push(
          "https://hleb-konditera.by/",
          "https://baker.by/",
          "https://artkonditer.by/",
          "http://hlebinfo.ru/",
          "https://bakenart.by/",
          "http://pekari-pro.by/",
          "https://www.udemy.com"
        );
        break;
      case "Sommelier":
        links.push(
          "https://valentinawine.com/",
          "https://winestate.ru/biblioteka",
          "https://vinovino.by/wine-school/",
          "https://sbswine.by/services/lovers/",
          "https://l-wine.ru/academy/sommlib/mobilnyy-somele/",
          "https://school.barportal.by/vinnyi-vecher/",
          "http://owino.by/"
        );
        break;
    }
    console.log(links);
    return (
      <>
        <h2>Сайты рекомендуемые для посещения:</h2>
        <ul>
          {links.map((item) => {
            return (
              <li>
                <a href={item}>{item}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  render() {
    return <>{this.switchCase()}</>;
  }
}
ReactDOM.render(
  <Clock format="12" timezone="+0:30" />,
  document.getElementById("root")
);
ReactDOM.render(<SelectJob />, document.getElementById("root1"));
reportWebVitals();
