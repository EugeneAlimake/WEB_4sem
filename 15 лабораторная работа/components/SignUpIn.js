import React from "react";
import { Link } from "react-router-dom";

function SignUpIn() {
return (
    <div className="signUpIn">
    <Link to="/signUp">
        <li>dont have an account? <h2>sign up</h2> </li>
    </Link>
        <Link to="/signIn">
        <li>already have an account? <h2>sign in</h2> </li>
    </Link>
    </div>
)
}
export default SignUpIn