import React, { useState, useEffect } from 'react';


// styles
import './placeorder.css'

export default function PlaceOrder(props) {
    const [show, setShow] = useState(props.isOpen);

    const handleClose = () => {
        setShow(false)
        console.log('handling close');
    };
    const handleShow = () => {
        setShow(true)
        console.log('handling show');
    };

    useEffect(()=>{
        console.log(props.isOpen)

        if(props.isOpen){
            handleShow() 
        }else{
            handleClose()
        }
       
        console.log(props.isOpen);
    },[props.isOpen])



    

    return (
        <>
            <section>
                <article>
                    {/* modal for placing order */}
                    {/* Modal */}

                    <div id="placeorderModal" className={ show ? 'modal display-block show' : 'modal display-none fade '} role="dialog">
                        <div className="modal-dialog">
                            {/* Modal content */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" onClick={()=>props.close()}>
                                        &times;
                                    </button>
                                    <h4 className="modal-title">Place Your Order and we'll start working on it</h4>
                                </div>
                                <div className="modal-body">
                                    <article>
                                        <form
                                            method="post"
                                            className="form"
                                            encType="multipart/form-data"
                                        >
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="placeorder_className">ClassName:</label>
                                                        <select
                                                            className="form-control"
                                                            id="placeorder_className"
                                                            name="className"
                                                            required
                                                        >
                                                            <option disabled defaultValue>
                                                                {" "}
                                                                -- select className --
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="placeorder_subclassName">SubClassName:</label>
                                                        <select
                                                            className="form-control"
                                                            id="placeorder_subclassName"
                                                            name="subclassName"
                                                            required
                                                        >
                                                            <option disabled defaultValue>
                                                                {" "}
                                    -- select subclassName --
                                </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="placeorder_client_type">Client Type:</label>
                                                        <select
                                                            className="form-control"
                                                            id="placeorder_client_type"
                                                            name="client_type"
                                                            required
                                                        >
                                                            <option disabled defaultValue>
                                                                {" "}
                                    -- select client_type --
                                </option>
                                                            <option value="I"> Individual </option>
                                                            <option value="C"> Corporate </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="placeorder_fleet">Upload Fleet:</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="placeorder_fleet"
                                                            name="placeorder_fleet"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="placeorder_template">Download Template:</label>
                                                        <div className="form-control" id="placeorder_template">
                                                            {" "}
                                                            <i className="fa fa-download">
                                                                {" "}
                                    click to download
                                </i>{" "}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-info">
                                                        Process
                            </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-default"
                                                        data-dismiss="modal"
                                                        onClick={handleClose}
                                                    >
                                                        Close
                            </button>
                                                </div>
                                            </div>
                                            {/* <!-- .row --> */}
                                        </form>
                                        {/* <!-- .form --> */}
                                    </article>
                                </div>
                                <div className="modal-footer">
                                    <a href="#" className="pull-right">
                                        {" "}
                                        <i>How it works</i>{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
