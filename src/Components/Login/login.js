import React, { Component } from 'react';
import './loginStyle.css';

const axios = require('axios').default;

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = (event) => {
        const reactData = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post("http://localhost:3000/", reactData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        const inputs = document.querySelectorAll(".login_input_field");

        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });

    }

    render() {
        return (
            <div className="login">
                <div className="Navbar_to_home">
                    <a href="/">
                        DoctorsVerse
                    </a>
                </div>
                <img className="wave" src="img/wave.png" alt="" />
                <div className="login_container">
                    <div className="login_img">
                        <img src="img/bg.svg" alt="" />
                    </div>
                    <div className="login-content">
                        <form action="/banner" className="login_form">
                            <img src="img/avatar.svg" alt="" />

                            <h2 className="login_title">Welcome Back</h2>

                            <div className="login_inputs one">
                                <div className="login_icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5 className="login_subtitle">Email</h5>
                                    <input type="mail" className="login_input_field"
                                        value={this.state.username} onChange={this.onEmailChange} />
                                </div>
                            </div>

                            <div className="login_inputs pass">
                                <div className="login_icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5 className="login_subtitle">Password</h5>
                                    <input type="password" className="login_input_field"
                                        value={this.state.password} onChange={this.onPasswordChange} />
                                </div>
                            </div>
                            <a href="#" className="forgot_pass">Forgot Password?</a>
                            <a href="/banner" className="Submit_link">
                                <input type="submit" className="submit_btn" value="Login"
                                    onClick={this.handleSubmit} />
                            </a>

                            <h3 className="sign_up_page_text">Don't have an account?</h3>
                            <a href="/register" className="sign_up_page_link">Click Here To Sign Up</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}