import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from "axios";

import AppSideNav from './../layout/sidenav';
import { tb_options } from '../../../HOC/helpers/tables';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import { toast } from 'react-toastify';

import {renderContent} from './../../../HOC/helpers/funcs'
import { Link } from 'react-router-dom';


export default function Orders(props) {

    // states
    const [order_formats, setOrder_formats] = useState([]);


    const headers = authHeader();

    // fetch order formats data 
    const fetch_orders = AuthService.API_URL + 'fetch_orders';
    useEffect(() => {
        let data = '';
        axios.get(fetch_orders, {
            headers: headers
        }).then(res => {
            setOrder_formats(res.data.data)
        }).catch(err => {
            toast.error('Something went wrong')
        });

    }, []);






    const tb_columns = [
        {
            name: "id",
            label: "#",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "pages",
            label: "Pages",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "wordcount",
            label: "Wordcount",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "title",
            label: "Title",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "description",
            label: "Description",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "active",
            label: "Active",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "created_at",
            label: "Created At",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'Action',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (dataIndex, rowData) => {
                    return (   
                        <>                     
                            <Link to={`/adOrder_view/${rowData.rowData[0]}`} className="btn btn-success btn-sm"><i className="fa fa-eye"></i> </Link>
                        </>
                    );
                }
            },
        }
    ];

    const tb_data = order_formats;




    return (
        <div className=" dashboard-container">
            <div className="row mr-0">            
                <div className="col-sm-2 sidenav_dashboard">
                    <AppSideNav />
                </div>

                <div className="col-sm-10">
                    <h2>Orders</h2> <hr />

 

                    <div className="table-responsive">
                       
                        <MUIDataTable
                            title={"Orders Table"}
                            data={tb_data}
                            columns={tb_columns}
                            options={tb_options}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
