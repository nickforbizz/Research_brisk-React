import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function navlinks() {
    return (
        <>
            <article>
                <ToastContainer />
            </article>

            <ul className="nav left_nav" data-spy="affix" data-offset-top="350">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/academic_bio">Academic Bio</Link></li>
                <li><Link to="/payrates">Pay Rates</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/work_samples">Work Samples</Link></li>
                <li><Link to="/client_testimonials"><span className="glyphicon glyphicon-log-in"></span> Clients Testimonials</Link></li>
            </ul>
        </>
    )
}
