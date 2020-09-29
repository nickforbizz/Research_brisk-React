import React, { useState, useEffect } from 'react'
import AuthService from '../../helpers/authservice';
// styles
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {

  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, [])


  const fixTopFunction = () => {
    var app_header = document.getElementById("nav_box");
    var app_sticky = app_header.offsetTop;
    if (window.pageYOffset > app_sticky) {
      app_header.classList.add("sticky");
    } else {
      app_header.classList.remove("sticky");
    }
  }
  window.onscroll = function () { fixTopFunction() };

  window.updateHeader = () => {
    setUser(AuthService.getCurrentUser());
  }
  // logIn LogOut
  const renderLogUser = () => {
    // setUser(AuthService.getCurrentUser());
    let loguser = (!user) ?
      <Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link> :
      <b className="dropdown">
        <strong className="dropdown-toggle" data-toggle="dropdown">Others
        <span className="caret"></span></strong>
        <ul className="dropdown-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="#" onClick={() => AuthService.logout()}><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
        </ul>

      </b>
      ;
    return loguser;
  }
  renderLogUser();
  return (
    <div>
      <div>
        <div className="row headTop" >
          {/* <div className="col s12">This div is 12-columns wide on all screen sizes</div> */}
          <div className="col-sm-4">
            <i className="fa fa-facebook-official f_icon" aria-hidden="true"></i>
            <i className="fa fa-instagram f_icon" aria-hidden="true"></i>
            <i className="fa fa-twitter-square f_icon" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square f_icon" aria-hidden="true"></i>
          </div>
          <div className="col-sm-8">
            <div className="right-align pull-right">
              <strong> <i className="fa fa-phone-square f_icon" aria-hidden="true"></i> +254 704 147029 </strong>
              <p className="hide-on-med-and-up"></p>
              <strong> <i className="fa fa-envelope f_icon ml-2" aria-hidden="true"></i> support@nyenjeri.com </strong>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-inverse appFront" data-offset-top="0" id="nav_box">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">ResearchBrisk</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">

            <ul className="nav navbar-nav navbar-right">
              <li className=""><Link to="/">Home</Link></li>
              <li><Link to="/academic_bio">Academic</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className="dropdown_others">{renderLogUser()}</li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
