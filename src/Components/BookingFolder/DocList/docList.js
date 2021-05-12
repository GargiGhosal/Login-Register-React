import React, { Component } from 'react';
import axios from 'axios';
import './docStyle.css'

export default class docList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Response: null,
            Department: localStorage.getItem("DeptName")
        }
        this.DocList = this.DocList.bind(this)
    }

    componentDidMount() {

        let DeptName = localStorage.getItem("DeptName");
        let userID = localStorage.getItem("userID");

        axios.get("https://mocki.io/v1/49beb8dc-7460-4d5a-8ffc-f47d1ff44204")
            .then(response => {
                const list = response.data;
                this.setState(
                    {
                        Response: list
                    })
            })
    }

    DocList() {
        let deptList = [];
        let a = this.state.Response;

        for (let i = 0; i < a.doctors.length; i++) {
            if (a.doctors[i].department[0].specialization_name === this.state.Department)
                deptList.push(a.doctors[i].hospitaldoctor_id)
        }

        let i = 0;
        let result = a.doctors.map(item => {
            if (item.hospitaldoctor_id === deptList[i]) {
                i++;
                return (
                    <li className="Table-Row">
                        <div className="Col Col-2" data-label="Doctor's Name">
                            <span className="DocName"> {item.doc_name} </span>
                            <br />
                            <small className="DocNameHalf">
                                ( {item.qualification} )
                            </small>
                        </div>
                        <div className="Col Col-2" data-label="Phone Number">{item.contact}</div>
                        <div className="Col Col-2" data-label="Day of Week"> {item.day_of_week} </div>
                        <div className="Col Col-2" data-label="Timings">
                            {new Date(item.start_time).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).split(",")[1]}
                            - <br />
                            {new Date(item.end_time).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).split(",")[1]}
                        </div>
                        <div className="Col Col-1" data-label="Fee"> {item.fees} </div>
                        <div className="Col Col-3" data-label="Book Appointment">
                            <a href="/form">
                                <button className="Booking-Button" onClick={this.onChangeDoc}>
                                    Click Here
                                </button>
                            </a>
                        </div>
                    </li>
                )
            }
        })
        return result;
    }

    render() {
        if (this.state.Response === null) return null;
        return (
            <div className="DocList_Main">
                <header className="header-area">
                    <div className="navbar-area">
                        <div className="doc_container">
                            <nav className="site-navbar">
                                <div className="site-logo">
                                    Doctors<span className="otherHalf">Verse</span>
                                </div>

                                <ul>
                                    <li><a href="#">profile</a></li>
                                    <li><a href="/">logout</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className="Container">
                    <ul className="responsive-table">
                        <li className="Header .bg-gradient text-white">
                            <div>{this.state.Department}</div>
                        </li>
                        <li className="Table-Header">
                            <div className="Col Col-2">Doctor's Name</div>
                            <div className="Col Col-2">Phone Number</div>
                            <div className="Col Col-2">Day of Week</div>
                            <div className="Col Col-2">Timings</div>
                            <div className="Col Col-1">Fee</div>
                            <div className="Col Col-3">Book Appointment</div>
                        </li>
                        {this.DocList()}
                    </ul>
                </div>
            </div>
        )
    }
}
