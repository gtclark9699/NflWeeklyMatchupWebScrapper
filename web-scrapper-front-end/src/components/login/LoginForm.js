import React, { useState } from 'react';
import '../../App.css'
import { useSignIn } from 'react-auth-kit';
import axios from "axios";
// import { useNavigate } from "react-router-dom";


function LoginForm() {

    const signIn = useSignIn();
    const [formData, setFormData] = useState({email: '', password: ''})
    // const navigate = useNavigate();

    // const onSubmit =  async (values) => {
    //     console.log("Try")


    //     try {

    //         const response = await axios.get(
    //             "http://localhost:5000/matchups/2023/2"
    //         );

    //         setTeams(response)
    //         console.log("Response-hook: " + teams.data)
    //         console.log("Response-api-response: " + response.data)

    //         signIn({
    //             token: response.data.token,
    //             expiresIn: 3600,
    //             tokenType: "Bearer",
    //             authState: { email: values.email }
    //         })

    //     } catch (err) {

    //         console.log("Error: ", err);
    //     }
    // };

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(formData.email)
        console.log(formData.password)

        axios.post("http://127.0.0.1:5000/api/login", formData)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.token)
                    if (signIn(
                        {
                            token: res.data.token,
                            expiresIn: res.data.expiresIn,
                            tokenType: "Bearer",
                            authState: res.data.authUserState,

                        }
                    )) {
                        // Redirect or do-something
                        // navigate("/data/grid");
                    } else {
                        // navigate("/error");
                    }
                }

            })

    }

    return (
        <div className="contain">
            <div className="login">
                <form method="post" onSubmit={onSubmit}>
                    <h1>Welcome Back!</h1>
                    <small>Login to your account and start connecting with the world. Your journey begins here.</small>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="Enter email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e)=>setFormData({...formData, password: e.target.value})}
                    />
                    <div className="mor">
                        <input className="check" type="checkbox" />
                        <label htmlFor="check">Remember Me</label>
                        <a href="/login">Forgot Password?</a>
                    </div>
                    <input className="log" type="submit" name="login-button" value="Login" />
                    <div className="line"></div>
                    <input className="log" type="submit" name="create-account-button" value="Create Account" />

                </form>
            </div>
        </div>
    );
}

export default LoginForm;