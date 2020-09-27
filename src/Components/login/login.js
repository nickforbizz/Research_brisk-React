import React, {useState} from 'react'
import { useForm } from "react-hook-form"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthService from '../../HOC/helpers/authservice';
import { Redirect } from 'react-router-dom';


export default function Login(props) {
    // states

    const [logged_in, setLogged_in] = useState(false)
    const [loading, setLoading] = useState('')

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setLoading("Loading ...");
        try {
            
            AuthService.login(data.email, data.password).then(res => {
                if(res.code === 1){
                    toast.success(res.msg);
                    window.updateHeader();
                    setLogged_in(true);
                }else{
                    toast.error(res.msg);
                }
                setLoading("");
                return res;
            })
        } catch (error) {
            alert('sd')
        }
    };

    if(logged_in){
        return <Redirect to='/dashboard'  />
    }else{

        return (
            <>
                <div className="container">
                    <div className="row">
                    <ToastContainer />
                        <div className="col-md-6 col-md-offset-3">
                            <form className="form mt-5"  onSubmit={handleSubmit(onSubmit)}>
                                <p> {loading} </p>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="text" className="form-control" id="email" name="email"  ref={register} placeholder="Enter Email ..."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password"  ref={register} placeholder="Enter Password ..."/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
