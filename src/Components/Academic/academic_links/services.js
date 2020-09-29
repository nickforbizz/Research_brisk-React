import React, { useState, useEffect } from 'react';
// import AuthService from '../../../HOC/helpers/authservice';
// import { authHeader } from '../../../HOC/helpers/authheader';
// import axios from "axios";
// import { toast } from 'react-toastify'

import Navlinks from '../Navlinks/navlinks'

export default function Academic_bio() {

    // states




    return (
        <section>
            <div className="container">

                <div className="row">

                    <div className="col-sm-3">
                        <Navlinks />
                    </div>

                    <div className="col-sm-9">
                        <h3>Services</h3> <hr />

                        <article className="">

                            <div className=" col-sm-6 arow" >
                                <div className="acol-md-12">
                                    <div className="row space-16">&nbsp;</div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="thumbnail">
                                                <div className="caption text-center">

                                                    <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">Servie name 1</a></h4>
                                                    <div className="thumbnail-description smaller">
                                                        <div className="well">
                                                            <div> 
                                                                <p>
                                                                In this tutorial, you will learn how to send email in PHP using PHPMailer library via Gmail SMTP.  Like PHPMailer, there are few more good email sending libraries in PHP e.g. 
                                                                PEAR::Mail interface, Swiftmailer etc which can help you easily send mail in PHP using Gmail SMTP.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption card-footer text-center">
                                                    <i>Negotiable</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  .col-sm-6 arow */}

                            <div className=" col-sm-6 arow" >
                                <div className="acol-md-12">
                                    <div className="row space-16">&nbsp;</div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="thumbnail">
                                                <div className="caption text-center">

                                                    <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">Servie name 1</a></h4>
                                                    <div className="thumbnail-description smaller">
                                                        <div className="well">
                                                            <div> 
                                                                <p>
                                                                In this tutorial, you will learn how to send email in PHP using PHPMailer library via Gmail SMTP.  Like PHPMailer, there are few more good email sending libraries in PHP e.g. 
                                                                PEAR::Mail interface, Swiftmailer etc which can help you easily send mail in PHP using Gmail SMTP.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption card-footer text-center">
                                                    <i>Negotiable</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  .col-sm-6 arow */}


                        </article>


                    </div>


                </div>
                {/* .row */}

            </div>
            {/* .container  */}
        </section>
    )
}
