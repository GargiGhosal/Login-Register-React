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
        axios.get("https://mocki.io/v1/1a622f1c-a8c1-486e-a527-6887c0af7c73")
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
                        <div className="Col Col-2" data-label="Customer Name">
                            <span> {item.doc_name} </span>
                            <br />
                            <small>
                                {item.qualification}
                            </small>
                        </div>
                        <div className="Col Col-1" data-label="Job Id"></div>
                        <div className="Col Col-3" data-label="Amount"> {item.fees} </div>
                        <div className="Col Col-4" data-label="Payment Status">
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
            <div>
                <div className="Container">
                    <ul className="responsive-table">
                        <li className="Header bg-secondary .bg-gradient text-white">
                            <div>Dentist</div>
                        </li>
                        <li className="Table-Header">
                            <div className="Col Col-2">Doctor's Name</div>
                            <div className="Col Col-1">Phone Number</div>
                            <div className="Col Col-3">Fee</div>
                            <div className="Col Col-4">Book Appointment</div>
                        </li>
                        {this.DocList()}
                    </ul>
                </div>
            </div>
        )
    }
}
