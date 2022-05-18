import React from 'react';


export class SignInForm extends React.Component {
    onChangeHandler(e) {

    }
    render() {
        return (
            <div className="sign_in">
                <input type="text" className="email" onChange={() => this.onChangeHandler} />
                <input type="password" className="password" onChange={() => this.onChangeHandler} />
            </div>
        )
    }
}