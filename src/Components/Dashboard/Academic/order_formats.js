import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { useForm } from "react-hook-form";
import axios from "axios";

import AppSideNav from './../layout/sidenav';
import { tb_options } from '../../../HOC/helpers/tables';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import Modal from './../../Utilities/Modal/modal'
import { toast } from 'react-toastify';

export default function Order_formats(props) {

    // states
    const [order_formats, setOrder_formats] = useState([]);
    const [show_modal, setShow_modal] = useState(false);
    const [format_title, setFormat_title] = useState('');
    const [format_descr, setFormat_descr] = useState('');
    const [add_flag, setAdd_flag] = useState('A');
    const [format_id, setFormat_id] = useState('');


    const headers = authHeader();
    const { register, handleSubmit, errors } = useForm();

    console.log(AuthService.API_URL);
    // fetch order formats data 
    const fetch_order_formats = AuthService.API_URL + 'fetch_order_formats';
    const post_order_formats = AuthService.API_URL + 'post_order_format';
    useEffect(() => {
        axios.get(fetch_order_formats, {
            headers: headers
        }).then(res => {
            setOrder_formats(res.data.data)
        });

    }, []);

    const addFormat = () => {
        setAdd_flag('A');
        setFormat_title('')
        setFormat_descr('')
        setShow_modal(true);
    }

    const editFormat = (id) => {
        setAdd_flag('E');
        setFormat_id(id);
        axios.get(AuthService.API_URL + 'get_order_format/'+id).then(res => {
            console.log(res.data);
            setFormat_title(res.data.name)
            setFormat_descr(res.data.description)
        })
        setShow_modal(true);
    }

    const delFormat = (id) => {
        let data = '';
        axios.post(AuthService.API_URL + 'delOrder_format/'+id, data,{
            headers: headers
        }).then(res => {
            if(res.data.code === 1){
                toast.success(res.data.msg);                
            }else{
                toast.error('Failed to remove Item');
            }
            toast.success('sucess')
            setTimeout(()=>{ window.location.reload() },1500)
        }).catch(
            err => toast.error('Something went wrong')
        )
    }




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
            name: "name",
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
                            <button onClick= {() => editFormat(rowData.rowData[0])} className="btn btn-success btn-sm"><i className="fa fa-edit"></i> </button>
                            <button onClick= {() => delFormat(rowData.rowData[0])} className="btn btn-success btn-sm"><i className="fa fa-trash"></i> </button>
                        </>
                    );
                }
            },
        }
    ];

    const tb_data = order_formats;


    // send data
    const onSubmit = data => {
        let url = null;
        (data.add_flag === 'A') ? url = post_order_formats : url = AuthService.API_URL + 'patchOrder_format/'+format_id;
        axios.post(url, data, {
            headers: headers
        }).then(res => {
            setOrder_formats(res.data.data);
            setShow_modal(false);
            window.location.reload()
        });
    };

    return (
        <div className=" dashboard-container">
            <div className="row mr-0">            
                <div className="col-sm-2 sidenav_dashboard">
                    <AppSideNav />
                </div>

                <div className="col-sm-10">
                    <h2>Order Formats</h2> <hr />

                    <Modal isOpen={show_modal}
                        close={() => setShow_modal(false)}
                        title={'Add|Edit Order Format'}                        
                    >
                        <article>
                            <form
                                method="post"
                                className="form"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="hidden" value={add_flag} name="add_flag" ref={register()}/>
                                        <div className="form-group">
                                            <label htmlFor="format_title">Title:</label>
                                            <input
                                                className="form-control"
                                                id="format_title"
                                                name="name"
                                                value={format_title}
                                                placeholder="Enter title of format"
                                                ref={register({ required: true })}
                                                onChange = {(e) => setFormat_title(e.target.value)}
                                            />
                                            <p className="text_red">{errors.name && " Name is required"}</p>

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="format_descr">Description:</label>
                                            <textarea
                                                rows={2}
                                                className="form-control"
                                                id="format_descr"
                                                name="description"
                                                value={format_descr}
                                                placeholder="Enter title of description"
                                                ref={register({ required: true })}
                                                onChange = {(e) => setFormat_descr(e.target.value)}
                                            />
                                            <p className="text_red">{errors.description && "Description is required"}</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-info">Save</button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- .form --> */}
                        </article>
                    </Modal>

                    <div className="table-responsive">
                        <button className="btn btn-info btn-sm mb-2" onClick={addFormat}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>  Add
                        </button>
                        <MUIDataTable
                            title={"Order Formats Table"}
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
