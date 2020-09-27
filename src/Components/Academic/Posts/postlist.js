import React, { useState, useEffect } from 'react';
import axios from "axios";

import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import { Link } from 'react-router-dom';

export default function Postlist() {

  // variables
  const fetch_blogs = AuthService.API_URL + 'fetch_blog';
  const headers = authHeader();

  // states
  const [blogs, setBlogs] = useState([]);

  // fetch order formats data 
  useEffect(() => {
    // blogs
    axios.get(fetch_blogs, {
      headers: headers
    }).then(res => {
      setBlogs(res.data.data)
    });


  }, []);


  if(blogs.length > 0){
    return blogs.map((item,i)=> (
          <div className="blog_card" key={i}>
          <div className="row">
            <div className="col-sm-4 image_blog" style={{
              background: `url('${AuthService.IMG_URL}storage/${item.media_link.replace('public/', '')}')`
            }}>Image</div>
            <div className="col-sm-8">
              <h5>{item.title}</h5>
              <p> {item.description} </p>
              <div>
                <span>11/22/2010</span>
                <Link to={`/post_view/${item.id}`} 
                    
                    className="btn btn-sm btn-primary pull-right">
                    view
                </Link>
              </div>
            </div>
          </div>
        </div>
        // {/* .blog_card */}
    ));
  }else{
    return (
      <>
        <div className="blog_card">
          <div className="row">
            <div className="col-sm-4 image_blog" style={{
              background: `url('images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg')`
            }}>Image</div>
            <div className="col-sm-8">
              <h5>The title Kama</h5>
              <p> lias non ex commodi quo deserunt eos lias non ex commodi quo deserunt eos </p>
              <div>
                <span>11/22/2010</span>
                <button className="btn btn-sm btn-primary pull-right">view</button>
              </div>
            </div>
          </div>
        </div>
        {/* .blog_card */}
  
        <div className="blog_card">
          <div className="row">
            <div className="col-sm-4 image_blog" style={{
              background: `url('images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg')`
            }}>Image</div>
            <div className="col-sm-8">
              <h5>The title</h5>
              <p> lias non ex commodi quo deserunt eos lias non ex commodi quo deserunt eos </p>
              <div>
                <span>11/22/2010</span>
                <button className="btn btn-sm btn-primary pull-right">view</button>
              </div>
            </div>
          </div>
        </div>
        {/* .blog_card */}
  
        <div className="blog_card">
          <div className="row">
            <div className="col-sm-4 image_blog" style={{
              background: `url('images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg')`
            }}>Image</div>
            <div className="col-sm-8">
              <h5>The title</h5>
              <p> lias non ex commodi quo deserunt eos lias non ex commodi quo deserunt eos </p>
              <div>
                <span>11/22/2010</span>
                <button className="btn btn-sm btn-primary pull-right">view</button>
              </div>
            </div>
          </div>
        </div>
        {/* .blog_card */}
      </>
    );

  }
}
