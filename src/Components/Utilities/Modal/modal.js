import React, { useState, useEffect } from 'react';


// styles

export default function Modal(props) {
    const [show, setShow] = useState(props.isOpen);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    useEffect(()=>{

        if(props.isOpen){
            handleShow() 
        }else{
            handleClose()
        }
       
    },[props.isOpen])



    

    return (
        <>
            <section>
                <article>
                    {/* modal for placing order */}
                    {/* Modal */}

                    <div id="placeorderModal" className={ show ? 'modal display-block show' : 'modal display-none fade '} role="dialog">
                        <div className="modal-dialog modal-lg">
                            {/* Modal content */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" onClick={()=>props.close()}>
                                        &times;
                                    </button>
                                    <h4 className="modal-title"> {props.title} </h4>
                                </div>
                                <div className="modal-body">
                                    {props.children}
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
