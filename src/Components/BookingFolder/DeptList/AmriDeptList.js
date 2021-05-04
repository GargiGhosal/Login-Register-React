import React, { Component } from 'react';
import './DeptStyle.css'

export default class AmriDeptList extends Component {
    render() {
        return (
            <div className="DeptList">
                <header className="header">
                    <h1>Department List</h1>
                    <p>The list of departments whose doctors you can book from our website</p>
                </header>

                <section className="section-2">
                    <div className="Dept_heading">
                        <h1>Image Card Hover Effect #02</h1>
                    </div>
                    <figure className="Dept_figure">
                        <img src="./departments-1.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">Cardiologist</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure className="Dept_figure">
                        <img src="./departments-2.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">Dentist</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure className="Dept_figure">
                        <img src="./departments-3.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">Neurologist</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure className="Dept_figure">
                        <img src="./departments-4.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">Eye Specialist</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure className="Dept_figure">
                        <img src="./departments-5.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">Pediatrician</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    <figure className="Dept_figure">
                        <img src="./departments-5.jpg" />
                        <figcaption>
                            <h3 className="Dept_title">General Consultant</h3>
                            <h3 className="Dept_hover">Select</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </section>
            </div>
        )
    }
}
