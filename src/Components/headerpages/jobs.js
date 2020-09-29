import React, { useState, useEffect } from 'react';
import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';
import axios from "axios";

export default function Jobs(props) {

    const [jobs, setJobs] = useState([]);

    // vars
    const headers = authHeader();

    useEffect(() => {
        let url = AuthService.API_URL + 'get_guest_orders';
        axios.get(url, {
            headers: headers
        }).then(res => {
            console.log(res.data);
            setJobs(res.data);

        });
    }, []);

    // render cards
    const renderJobs = () => {
        if (jobs.length > 0) {
            return jobs.map((item, i) => (
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

            <article className="text-center">
                <h4>Jobs</h4>
                <p>Apply Job to the email provided</p>
            </article>
            <div className="row mr-2">
                <div className="col-sm-12">
                    {renderJobs()}
                </div>
            </div>
            <article>

            </article>
        </section>
    )
}
