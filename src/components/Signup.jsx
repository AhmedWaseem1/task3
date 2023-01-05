import React, { useState } from "react";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <div class="form-group">
            <label htmlFor="name">Full Name</label>
            <input class="form-control" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your mail-id" id="email" name="email" />
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input class="form-control" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter new Password" id="password" name="password" />
          </div>
            <button class="btn btn-primary btn-sm" type="submit">SignUp</button>
        </form>
        <button class="btn btn-primary btn-sm" onClick={() => props.onFormSwitch('login')}>Existing User? Login here.</button>
    </div>
    )
}