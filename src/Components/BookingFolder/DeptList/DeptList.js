import React, { Component } from 'react';
import axios from 'axios';
import './DeptStyle.css'

export default class DeptList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Response: [],
            DeptResponse: {}
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState(
                    {
                        Response: response.data
                    })
            })

        let ID = parseInt(localStorage.getItem("hospID"));
        let hospList = this.state.Response.map(arr => arr.id);
        for (let i = 0; i < hospList.length; i++) {
            if (hospList[i] === ID) {
                this.setState({
                    DeptResponse: this.state.Response[i]
                })
            }
        }
    }

    DepartmentListFunc() {
        let deptList = [];
        let a = this.state.DeptResponse;

        this.state.DeptResponse.doctors.forEach(e => e.department.map(
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
                    <a href="#"></a>
                </figure>
            )
        })
        return (result);
    }

    render() {
        return (
            <div className="DeptList">
                <header className="header">
                    <h1>Department List</h1>
                    <p>The list of departments whose doctors you can book from our website</p>
                </header>

                <section className="section-2">
                    <div className="Dept_heading">
                        <h1>AMRI Hospital</h1>
                    </div>
                    {this.DepartmentListFunc()}
                </section>
            </div>
        )
    }
}
