import React, { useState, useEffect } from 'react';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import axios from "axios";
import { toast } from 'react-toastify'

import Navlinks from '../Navlinks/navlinks'

export default function Academic_bio() {

    // states
    const [worksamples, setWorksamples] = useState([]);

    // vars
    const headers = authHeader();

    useEffect(() => {
        let url = AuthService.API_URL + 'get_guest_orders';
        axios.get(url, {
            headers: headers
        }).then(res => {
            console.log(res.data);
            setWorksamples(res.data);

        });
    }, []);


    // render cards
    const renderSamples = () => {
        if (worksamples.length > 0) {
            return worksamples.map((item, i) => (
                <div className=" col-sm-6 arow" key={i}>
                    <div className="acol-md-12">
                        <div className="row space-16">&nbsp;</div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="thumbnail">
                                    <div className="caption text-left">

                                        <h4 id="thumbnail-label"> {item.title} </h4>
                                        <div className="thumbnail-description smaller text-left">
                                            
                                            <p>{item.description} </p>

                                        </div>
                                    </div>
                                    <div className="caption card-footer text-center">
                                        <i>Attachements</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return <h4 className="text-center"> No Data Available ... </h4>
        }
    }

    return (
        <section>
            <div className="container">

                <div className="row">

                    <div className="col-sm-3">
                        <Navlinks />
                    </div>

                    <div className="col-sm-9">
                        <h3>Work Samples</h3> <hr />

                        <article className="">

                            {renderSamples()}


                        </article>


                    </div>


                </div>
                {/* .row */}

            </div>
            {/* .container  */}
        </section>
    )
}
