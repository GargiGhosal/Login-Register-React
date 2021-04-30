import React, { Component } from 'react';
import './registerStyle.css';
import axios from 'axios';

export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            email: '',
            password: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    onUserNameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const reactData = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post("http://localhost:3000/register", reactData)
            .then( function(response) {
                console.log(response);
            })
            .catch( function(error) {
                console.log(error);
            })
    }

    componentDidMount() {
        const inputs = document.querySelectorAll(".register_input_field");

        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
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
            <div className="register">
                <img className="wave" src="img/wave.png" />
                <div className="register_container">
                    <div className="register_img">
                        <img src="img/clip-1642.png" />
                    </div>
                    <div className="register-content">
                        <form action="index.html" className="register_form">
                            <img src="img/avatar.svg" />

                            <h2 className="register_title">Welcome</h2>

                            <div className="register_inputs one">
                                <div className="register_icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5 className="register_subtitle">Name</h5>
                                    <input type="text" name="name" className="register_input_field"
                                        value={this.state.name} onChange={this.onNameChange} />
                                </div>
                            </div>

                            <div className="register_inputs one">
                                <div className="register_icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5 className="register_subtitle">Username</h5>
                                    <input type="text" className="register_input_field"
                                        value={this.state.username} onChange={this.onUserNameChange} />
                                </div>
                            </div>

                            <div className="register_inputs one">
                                <div className="register_icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5 className="register_subtitle">Email</h5>
                                    <input type="mail" className="register_input_field"
                                        value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                            </div>

                            <div className="register_inputs pass">
                                <div className="register_icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5 className="register_subtitle">Password</h5>
                                    <input type="password" className="register_input_field"
                                        value={this.state.password} onChange={this.onPasswordChange} />
                                </div>
                            </div>
                            <input type="submit" className="submit_btn" value="Sign Up"
                                onClick={this.handleSubmit} />

                            <h3 className="sign_up_page_text">Already have an account?</h3>
                            <a href="/" className="sign_up_page_link">Click Here To Sign In</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
