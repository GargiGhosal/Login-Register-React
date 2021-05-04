import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BannerStyle.css';
import $ from 'jquery';
import axios from 'axios';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { hospital: "" };
        this.onChange = this.onChange.bind(this);
        this.hospSubmit = this.hospSubmit.bind(this);
    }

    WinScroll() {
        const sleep = ms => new Promise(res => setTimeout(res, ms));

        (async () => {
            await sleep(200);
            window.scrollTo(0, 800);
        })();
    }

    onChange = e => {
        // localStorage.setItem("hospName", e.target.value);
        let TargetValue = e.target.value;
        if (TargetValue.trim().indexOf(' ') !== -1) {

            let matches = TargetValue.match(/\b(\w)/g);
            TargetValue = matches.join('').toUpperCase();
        }
        let valueSelectedByUser = "/" + TargetValue + "DeptList";
        this.setState({ hospital: valueSelectedByUser });
    }

    hospSubmit = (event) => {
        event.preventDefault();
        const hospData = {
            hospName: this.state.hospital
        }
        axios.post("/t/n80zx-1620142118/post", hospData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("problem occured", error);
            })
        window.location.href = this.state.hospital;
    }

    componentDidMount() {
        document.querySelector('.admin_content').addEventListener('click', function (evt) {
            evt.preventDefault();
            $(this).closest('.header_dropdown').find('.account_dropdown').toggle();
        });

        document.body.addEventListener('click', function (evt) {
            if ($(evt.target).closest('.header_dropdown').length === 0) {
                $('.account_dropdown').hide();
            }
        })
    }

    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="header-admin">
                            <div className="nav_container">
                                <div className="header-content">
                                    <div className="header_logo">
                                        <a href="/">
                                            HOME
                                        </a>
                                    </div>

                                    <div className="header_dropdown">
                                        <div className="admin_content">
                                            <div className="admin_data">
                                                <div className="img-fluid">
                                                    <i className="fas fa-user-circle profile_icon"></i>
                                                </div>
                                                <div className="admin_name">
                                                    <a href="#">
                                                        Your Name
                                                    </a>
                                                </div>
                                                <div className="admin_dropdownicon">
                                                    <i className="fas fa-sort-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account_dropdown">
                                            <div className="account_dropdown_body">
                                                <div className="account_dropdown_item">
                                                    <a href="#">
                                                        <i className="fas fa-user">
                                                        </i>Account
                                                    </a>
                                                </div>
                                                <div className="account_dropdown_item">
                                                    <a href="#">
                                                        <i className="fas fa-cog">
                                                        </i>Settings
                                                    </a>
                                                </div>
                                                <div className="account_dropdown_footer">
                                                    <a href="/">
                                                        <i className="fas fa-sign-out-alt">
                                                        </i>Logout
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    {/* <a href="/" className="footer-logo">
                                        <img src="./Doctorsverse-logo-white.png" alt="" />
                                    </a> */}
                                    <h3 className="footer-title">Doctors
                                        <span className="footer-title-half">Verse</span>
                                    </h3>
                                    <p className="footer-subtitle">
                                        Life is hard enough already.
                                        Let us make it a little easier.<br />
                                        Where life continues and care that never quits.
                                    </p>
                                </div>
                            </div>

                            <div className="row footer-newsletter justify-content-center">
                                <div className="col-lg-6">
                                    <form action={this.state.hospital}>
                                        <input list="HospitalName"
                                            className="mdb-select md-form form-control"
                                            type="text"
                                            placeholder="Select your Hospital"
                                            onChange={this.onChange} />
                                        <datalist id="HospitalName">
                                            <option value="Apollo" />
                                            <option value="Amri" />
                                            <option value="B. M. Birla" />
                                            <option value="Calcutta Heart Clinic" />
                                            <option value="Desun" />
                                            <option value="Fortis" />
                                        </datalist>
                                        <a href={this.state.hospital}>
                                            <input type="submit" value="Select"
                                                onClick={this.hospSubmit} />
                                        </a>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
