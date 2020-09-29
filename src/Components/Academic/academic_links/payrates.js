import React, { useState, useEffect } from 'react';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import axios from "axios";
import { toast } from 'react-toastify'

import Navlinks from '../Navlinks/navlinks'

export default function Academic_bio() {

    // states
    const [paperprices, setPaperprices] = useState([]);

    // vars
    const headers = authHeader();

    useEffect(() => {
        let url = AuthService.API_URL + 'fetch_order_prices';
        axios.get(url, {
            headers: headers
        }).then(res => {
            console.log(res.data.data);
            setPaperprices(res.data.data);
            
        });
    }, []);


    // render cards
    const renderPrices = () => {
        if(paperprices.length > 0){
            return paperprices.map((item, i) =>(
                <div className=" col-sm-6 arow" key={i}>
                <div className="acol-md-12">
                    <div className="row space-16">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="thumbnail">
                                <div className="caption text-center">
                                   
                                    <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">{ item.name }</a></h4>
                                    <div className="thumbnail-description smaller"> 
                                        <div className="well">
                                            <div className="pull-right"> {item.price} </div>
                                            <div> <b>{item.pages} page(s) @ </b> </div>                                                            
                                        </div>
                                        <p>{item.description} </p>
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
            ));
        }else{
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
                        <h3>Pay Rates</h3> <hr />

                        <article className="">
                           { renderPrices() }
                        </article>


                    </div>


                </div>
                {/* .row */}

            </div>
            {/* .container  */}
        </section>
    )
}
