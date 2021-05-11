import React, { Component } from 'react';
import axios from 'axios';
import './DeptStyle.css'

export default class DeptList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Response: null,
            hospitalName: ""
        }
        this.DepartmentListFunc = this.DepartmentListFunc.bind(this);
    }

    componentDidMount() {
        // let userID = localStorage.getItem("userID");
        // add the url like this ("https://localhost:3001/hospitals/" + userID )

        console.log(localStorage.getItem("userID"));

        axios.get("https://mocki.io/v1/1a622f1c-a8c1-486e-a527-6887c0af7c73")
            .then(response => {
                const list = response.data;
                this.setState(
                    {
                        Response: list,
                        hospitalName: list.hospital_name
                    })
            })
    }

    DepartmentListFunc() {
        let deptList = [];
        let a = this.state.Response;

        a.doctors.forEach(e => e.department.map(
            e => deptList.push(e.specialization_name)
        ))
        let uniqueDepertments = deptList.filter((v, i, a) => a.indexOf(v) === i);

        let i = 0;
        let result = uniqueDepertments.map(item => {
            i++;
            return (
                <figure className="Dept_figure">
                    <img src={"./departments-" + i + ".jpg"} />
                    <figcaption>
                        <h3 className="Dept_title">{item}</h3>
                        <h3 className="Dept_hover">Select</h3>
                    </figcaption>
                    <a href="/DocList"
                        onClick={() => { localStorage.setItem("DeptName", item) }}>
                    </a>
                </figure>
            )
        })
        return (result);
    }

    render() {
        if (this.state.Response === null) return null;
        return (
            <div className="DeptList">
                <header className="header-area">
                    <div className="navbar-area">
                        <div className="container">
                            <nav className="site-navbar">
                                <div className="site-logo">
                                    Doctors<span className="otherHalf">Verse</span>
                                </div>

                                <ul>
                                    <li><a href="#">profile</a></li>
                                    <li><a href="#">logout</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <header className="header">
                    <h1>Department List</h1>
                    <p>The list of departments whose doctors you can book from our website</p>
                </header>

                <section className="section-2">
                    <div className="Dept_heading">
                        <h1>{this.state.hospitalName} Hospital</h1>
                    </div>
                    {this.DepartmentListFunc()}
                </section>
            </div>
        )
    }
}
