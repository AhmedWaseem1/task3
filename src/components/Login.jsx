import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your mail-id" id="email" name="email" />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input class="form-control" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your Password" id="password" name="password" />
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
                <button className="btn btn-primary btn-sm" type="submit">Log In</button>
            </form>
            <button className="btn btn-primary btn-sm" onClick={() => props.onFormSwitch('register')}>New ? Register here.</button>
        </div>
    )
}