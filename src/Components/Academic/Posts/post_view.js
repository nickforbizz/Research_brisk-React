import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser'; 

import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Post_view(props) {

    const params=useParams()
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const headers = authHeader();
    const { register, handleSubmit, errors } = useForm();
    const post_id = params.id;

    useEffect(() => {
        
        let url_post = AuthService.API_URL + 'get_blog/'+post_id;
        // let url_comments = AuthService.API_URL + 'get_blog_comment/'+post_id;
        axios.get(url_post, {
            headers: headers
        }).then(res => {
            setPost(res.data);
            setComments(res.data.blogs_comments);
            console.log(res.data);
        }).catch(err => {
            toast.error('Something went wrong')
        });

    }, []); 



    // comments
    const renderComments = () => {
        let template = null;
        if(comments.length < 1){
            template = <p className="text-center">Be the first to comment</p>
        }else{
            template = comments.map((item, i) => (
                <div key={i}>
                    {item.comment}
                </div>
            ))
        }

        return template;
    }

    // send data
    const onSubmit = data => {
        let url = AuthService.API_URL + 'post_blog_comment';
        axios.post(url, data, {
            headers: headers
        }).then(res => {
            console.log(res.data);
            if (res.data.code === 1){
                toast.success('Comment Posted');
            }else{
                toast.error("An error occurred while posting")
            }
            // window.location.reload()
        }).catch(err => toast.error("Something went wrong !!"));
    };





    if(post.length < 1){
        return (
        <div className="jumbotron text-center pt-5">
            <ToastContainer />
            <h5>Loading ...</h5>
        </div>
        );
    }else{
        return (
            <div>
                <section>

                    <article>
                        <ToastContainer />
                    </article>

                    <div className="container">
                        <figure className="text-center post_img">
                            <img src={`${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}`}
                                height="300px"
                                alt={`${post.title}`}
                            />
                            <figcaption>{post.title}.</figcaption>
                        </figure>
                        <div className="well">
                            <div className="pull-right">Date: 
                            <i> <Moment parse="YYYY-MM-DD HH:mm">{post.created_at}</Moment> </i>
                            </div>
                            <div>
                                <p> <b>{post.blog_category.title}   </b> </p>
                                <p>Posted By: <i>{post.user.names}</i></p>
                            </div>
                        </div>
                        <h2 className="text-center">{post.title}</h2> <hr/>

                        <article>
                            { ReactHtmlParser(post.body)}
                        </article>

                        <article>
                            {/* comment */}
                            <p>Send a comment</p>


                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                <input type="hidden" value={post.id} name="blog_id" ref={register()}/>
                                    <textarea name="comment" placeholder="Type a comment ..." className="form-control" ref={register({ required: true })}></textarea>
                                    <p className="text_red">{errors.comment && " Comment is required"}</p>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>


                        </article>




                        <article className="mb-5">
                            <h5>Comments</h5> <hr/>
                            {renderComments()}
                        </article>

                    </div>

                </section>
            </div>
        );
    }
}
