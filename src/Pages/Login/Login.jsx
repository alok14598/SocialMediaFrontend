import React from 'react'
import "./Login.scss";


import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="card"> 
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <span>Don't you have an account?</span><br></br>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username"></input>
                        <input type="password" placeholder="password"></input><br></br>
                        <button>Login</button>
                    </form>
                    
                </div>
            </div>


        </div>
    )
}

export default Login;