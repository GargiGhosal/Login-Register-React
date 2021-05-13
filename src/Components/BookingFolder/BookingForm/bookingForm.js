import React, { Component } from 'react';
import './formStyle.css'

import DatePicker from "react-datepicker";
import { getDay, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";


export default class bookingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null
        }
    }

    isWeekday = date => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    }

    render() {
        return (
            <div className="booking_form">
                <div className="split_screen">
                    <div className="left">
                        <section className="copy">
                            <h1 className="Default_Values">Your Booking Details</h1>
                            <div className="Prev_Values">

                                <div className="dis-flex size1">
                                    <div className="txt1 p-r-25">
                                        <i className="fas fa-hospital"></i>
                                    </div>

                                    <div className="flex-col size2">
                                        <span className="txt1 p-b-20">
                                            Hospital And Department
                                        </span>

                                        <span className="txt3">
                                            <span style={{ marginRight: "0.25rem" }}>Amri Hospital,</span>
                                            <span>Cardiology</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="dis-flex size1">
                                    <div className="txt1 p-r-25">
                                        <i className="fas fa-stethoscope"></i>
                                    </div>

                                    <div className="flex-col size2">
                                        <span className="txt1 p-b-20">
                                            Doctor's Name
                                        </span>

                                        <span className="txt3">
                                            Baburao Ganpatrao Apte
                                        </span>
                                    </div>
                                </div>
                                <div className="dis-flex size1">
                                    <div className="txt1 p-r-25">
                                        <i className="fas fa-rupee-sign"></i>
                                    </div>

                                    <div className="flex-col size2">
                                        <span className="txt1 p-b-20">
                                            Consultation Fee
                                        </span>

                                        <span className="txt2">
                                            500
                                        </span>
                                    </div>
                                </div>
                                <div className="dis-flex size1">
                                    <div className="txt1 p-r-25">
                                        <i className="far fa-calendar"></i>
                                    </div>

                                    <div className="flex-col size2">
                                        <span className="txt1 p-b-20">
                                            Select Date
                                        </span>

                                        <span className="txt3">
                                            <span style={{ marginRight: "10px", color: "white" }}>
                                                Timings
                                            </span>
                                            <DatePicker
                                                className="Date"
                                                selected={this.state.startDate}
                                                onChange={date => this.setState({
                                                    startDate: date
                                                })}
                                                minDate={subDays(new Date(), 0)}
                                                filterDate={this.isWeekday}
                                                placeholderText="Select a weekday"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="right">
                        <form action="#">
                            <section className="copy">
                                <h2 className="Booking_Heading">User Information</h2>
                            </section>
                            <div className="input_container name">
                                <label className="Booking_Label" for="fname">Full Name</label>
                                <input type="text" id="fname" name="fname" className="Name" />
                            </div>
                            <div className="input_container age">
                                <label className="Booking_Label" for="age">Age</label>
                                <input type="text" id="age" name="age" className="Age" />
                            </div>
                            <div className="input_container age">
                                <label className="Booking_Label" for="gender">Gender</label>
                                <select id="gender" className="Gender">
                                    <option selected disabled hidden>Select Your Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="input_container phoneNo">
                                <label className="Booking_Label" for="phoneNo">Phone Number</label>
                                <input type="text" id="phoneNo" name="phoneNo" className="PhoneNo" />
                            </div>
                            <div className="input_container email">
                                <label className="Booking_Label" for="email">Email</label>
                                <input type="email" id="email" name="email" className="Email" />
                            </div>
                            <div className="input_container address">
                                <label className="Booking_Label" for="address">Address</label>
                                <textarea type="text" id="address" name="address" className="Address"></textarea>
                            </div>

                            <button type="submit" className="signup_btn">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
