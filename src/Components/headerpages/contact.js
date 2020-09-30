import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

export default function About() {


    // form states
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const headers = authHeader();
    const { register, handleSubmit, errors } = useForm();

    // send data
    const onSubmit = data => {
        swal("processing ...");
        let url = AuthService.API_URL + 'post_enquiry';
        axios.post(url, data, {
            headers: headers
        }).then(res => {
            console.log(res.data);
            swal.close();
            if (+res.data.code === 1) {
                toast.success(res.data.msg);
                document.getElementById("enquiry_form").reset();
            } else {
                toast.error('Enquiry did not add')
            }
            // setShow_modal(false); 
            setTimeout(() => {
                window.location.reload()                
            }, 1500);
        }).catch(err => toast.error('Something went wrong'));
    };


    return (
        <section>

            <article>
                <ToastContainer />
            </article>

            <article className="text-center mt-5">
                <h4>Contact</h4>
                <p>Provide us your feedback</p>
                <p>How can it improve life</p>
            </article>


            <article className="mt-5 mb-5">

                <div className="container">
                    <div className="row">

                        <div className="col-sm-offset-2 col-sm-8">


                            <form
                                method="post"
                                className="form"
                                id="enquiry_form"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row mr-0">

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                className="form-control"
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={email}
                                                placeholder="Enter email"
                                                ref={register({ required: true })}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <p className="text_red">{errors.email && " Email is required"}</p>

                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject:</label>
                                            <input
                                                className="form-control"
                                                id="subject"
                                                name="subject"
                                                value={subject}
                                                placeholder="Enter subject"
                                                ref={register({ required: true })}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                            <p className="text_red">{errors.subject && " Subject is required"}</p>

                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Message:</label>
                                            <textarea className="form-control"
                                                id="message"
                                                name="message"
                                                value={message}
                                                placeholder="Enter message"
                                                ref={register({ required: true })}
                                                onChange={(e) => setMessage(e.target.value)}>

                                            </textarea>

                                            <p className="text_red">{errors.message && " Message is required"}</p>

                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button className="btn btn-info pull-right">Send</button>
                                        </div>
                                    </div>

                                </div>
                                {/* .row */}
                            </form>



                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
