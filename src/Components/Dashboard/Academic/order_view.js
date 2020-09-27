import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import { toast } from 'react-toastify';

import AppSideNav from './../layout/sidenav';

export default function Order_view(props) {


    const params=useParams()
    const [orders, setOrders] = useState([]);
    const headers = authHeader();


    useEffect(() => {
        let url = AuthService.API_URL + 'get_order/'+params.id;
        axios.get(url, {
            headers: headers
        }).then(res => {
            setOrders(res.data);
            console.log(res.data);
        }).catch(err => {
            toast.error('Something went wrong')
        });
    }, []); 

    if(orders.length < 1){
        return (
            <div className="">
                <h3>Loading ... </h3>
            </div>
        )
    }else{

        return (
            <>
                <div className=" dashboard-container">
                    <div className="row mr-0">
                        <div className="col-sm-2 sidenav_dashboard">
                            <AppSideNav />
                        </div>
    
                        <div className="col-sm-10">
                            <h2>Order Details</h2> <hr />
    
                            <div className="row">
                                <div className="col-md-5">
                                    <p><b>Title</b></p> 
                                    <p> {orders.title} </p><hr/>
                                </div>
    
                                <div className="col-md-3">
                                    <p><b>Email</b></p> 
                                    <p> {orders.email} </p><hr/>
                                </div>
    
                                <div className="col-md-2">
                                    <p><b>Pages</b></p>
                                    <p> {orders.pages} </p> <hr/>
                                </div>
    
                                <div className="col-md-2">
                                    <p><b>Word Count</b></p>
                                    <p> {orders.wordcount} </p> <hr/>
                                </div>
    
                            </div>
                            {/* .row */}
    
                            <div className="row ">
                                <div className="col-md-5">
                                    <p> <b>Category</b> </p> 
                                    <p> {orders.order_category.name} </p><hr/>
                                </div>
    
                                <div className="col-md-3">
                                    <p><b>Format</b></p>
                                    <p> {orders.order_format.name} </p> <hr/>
                                </div>
    
                                <div className="col-md-2">
                                    <p><b>Language</b></p> 
                                    <p> {orders.order_language.name}  </p><hr/>
                                </div>
    
                                <div className="col-md-2">
                                    <p><b>Due date</b></p>
                                    <p> 365</p> <hr/>
                                </div>
    
                            </div>
                            {/* .row */}
    
                            <div className="row ">
                                <div className="col-md-12">
                                    <p> <b>Description</b> </p> 
                                    <p> { orders.description } </p><hr/>
                                </div>                            
    
                            </div>
                            {/* .row */}
    
                            <div className="row ">
                                <div className="col-md-12">
                                    <p> <b>Attachements</b> </p> 
                                    <p> The href attribute requires a valid href attribute requires  href attribute requires </p><hr/>
                                </div>                            
    
                            </div>
                            {/* .row */}
    
    
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
