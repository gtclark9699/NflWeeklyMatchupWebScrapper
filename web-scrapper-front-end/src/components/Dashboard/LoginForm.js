import React, { useState } from 'react';
import '../../App.css'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    return (
            <div class="contain">
                <div class="login">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Welcome Back!</h1>
                        <small>Login to your account and start connecting with the world. Your journey begins here.</small>
                        <label for="username">Username:</label>
                        <input
                            placeholder="Enter Username"
                            type="text"
                            id=""
                            name=""
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <label for="password">Password:</label>
                        <input
                            placeholder="Enter Password"
                            type="password"
                            id=""
                            name=""
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div class="mor">
                            <input class="check" type="checkbox" />
                            <label for="check">Remember Me</label>
                            <a href="">Forgot Password?</a>
                        </div>
                        <input class="log" type="submit" name="" value="Login" id="" />
                        <div class="line"></div>
                        <input class="log" type="submit" name="" value="Create Account" id="" />

                    </form>
                </div>
            </div>
    );
}

export default LoginForm;