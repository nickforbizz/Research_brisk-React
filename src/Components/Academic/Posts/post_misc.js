import React, { useState, useEffect } from 'react';
import axios from "axios";

import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import { Link } from 'react-router-dom';

export default function Post_misc() {

    // variables 
    const headers = authHeader();
    const fetch_recent_blogs = AuthService.API_URL + 'fetch_recent_blog';
    const fetch_blog_cats = AuthService.API_URL + 'fetch_blog_cats';

    // states
    const [recent_blogs, setRecent_blogs] = useState([]);
    const [blog_cats, setBlog_cats] = useState([]);

    // fetch order formats data 
    useEffect(() => {
        // recent_blogs
        axios.get(fetch_recent_blogs, {
            headers: headers
        }).then(res => {
            setRecent_blogs(res.data.data)
        });

        // blog cats
        axios.get(fetch_blog_cats, {
            headers: headers
        }).then(res => {
            setBlog_cats(res.data.data)
        });


    }, []);


    // recent Posts
    const renderRecentPosts = () => {
        if (recent_blogs.length < 1) {
            return (
                <>
                    <li className="list-group-item">New <span className="badge">view</span></li>
                    <li className="list-group-item">Deleted <span className="badge">view</span></li>
                    <li className="list-group-item">Warnings <span className="badge"> view </span></li>
                </>
            );
        } else {
            return recent_blogs.map((item, i) => (
                <li className="list-group-item list-group-item-padd mr-0" key={i}>{item.title} 
                    <span className="badge pb-1">
                        <Link  to={`/post_view/${item.id}`}>view</Link>
                    </span>
                </li>
            ))
        }
    }

    // recent Posts
    const renderBlogCats = () => {
        if (blog_cats.length < 1) {
            return (
                <>
                    <li className="list-group-item">Sports</li>
                    <li className="list-group-item">Music</li>
                    <li className="list-group-item">Academia</li>
                </>
            );
        } else {
            return blog_cats.map((item, i) => (
                <li className="list-group-item" key={i}>{item.title} </li>
            ))
        }
    }

    return (
        <div>
            <div className='row'>

                <div className="col-sm-12">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* POSTS */}
                <div className="col-sm-12">
                    <div className="panel panel-default mt-5">
                        <div className="panel-heading">Recent Posts</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {renderRecentPosts()}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CATEGORIES */}
                <div className="col-sm-12">
                    <div className="panel panel-default mt-5">
                        <div className="panel-heading"> Posts Categories</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {renderBlogCats()}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* COMMENTS */}
                <div className="col-sm-12">
                    <div className="panel panel-default mt-1">
                        <div className="panel-heading">Recent Comments</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">use a button and change it with appropriate styles. </li>
                                <li className="list-group-item">The href attribute requires a valid value to be accessible. Provide a valid, </li>
                                <li className="list-group-item">If you cannot provide a valid href, but still need the element to resemble a link,
                                use a button and change it with appropriate styles.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
            {/* .row */}
        </div>
    )
}
