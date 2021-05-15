import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './BannerStyle.css';
import $ from 'jquery';
import axios from 'axios';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hospital: "",
            hospList: []
        };
        this.HospitalList = this.HospitalList.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        axios.get("http://localhost:3001/hospitals")
            .then(response => {
                const list = response.data;
                this.setState(
                    {
                        hospList: list
                    })
            })
    }

    onChange = e => {
        let valueSelectedByUser = e.target.value;
        this.setState({ hospital: valueSelectedByUser });
        // console.log(this.state.hospital)
    }

    HospitalList() {
        let result = this.state.hospList.map(arr => arr.hospital_name)
        console.log(result);
        result = result.map(item => {
            return <option value={item} />
        })
        return (result);
    }

    onSubmit = () => {
        let result = this.state.hospList.map(arr => arr.hospital_name)
        let idList = this.state.hospList.map(arr => arr.id)
        // console.log(idList)

        let hospID = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i] === this.state.hospital)
                hospID = i
        }
        // console.log(idList[hospID])
        localStorage.setItem("hospID", idList[hospID])
    }

    render() {
        if (this.state.hospList === null) return null;
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
                                    <form action="/DeptList">
                                        <input list="HospitalName"
                                            className="mdb-select md-form form-control"
                                            type="text"
                                            placeholder="Select your Hospital"
                                            onChange={this.onChange} />
                                        <datalist id="HospitalName">
                                            {this.HospitalList()}
                                        </datalist>
                                        <a href="/DeptList">
                                            <button className="Hosp_Submit_Btn" onClick={this.onSubmit}>Submit</button>
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
