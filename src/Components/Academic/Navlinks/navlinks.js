import React from 'react'

export default function navlinks() {
    return (
        <>
            <ul className="nav left_nav" data-spy="affix" data-offset-top="350">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Academic Bio</a></li>
              <li><a href="#">Pay Rates</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Work Samples</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Clients Testimonials</a></li>
            </ul>
        </>
    )
}
