import React from 'react'
import {connect} from "react-redux"
import { signedIN } from "../../redux/actions";
import { Link } from "react-router-dom";

class SignInForm extends React.Component {
    state={
        password: null,
        login: null,
        correct: true
    }
    changeHandler(e, target) {
        this.setState({[target]: e.target.value})
    }
    handleClick = (e) => {
        e.preventDefault();
        if(this.state.login === this.props.login && this.state.password === this.props.password) {
            this.props.signedIN(true)
        }
        else this.setState({correct: false})
    }
    render() {
        return(
            <div className="sign_in">
                {!this.state.correct && <h3>your login or password is incorrect</h3>}
                <p>login/email</p>
                <input type="text" onChange={(e) => this.changeHandler(e, "login")} />
                <p>password</p>
                <input type="password" onChange={(e) => this.changeHandler(e, "password")} />
                <button onClick={this.handleClick}><Link to="/">send</Link></button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        password: state.password,
        login: state.login
    }
}
const mapDispatchToProps = {
    signedIN,
  };
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);