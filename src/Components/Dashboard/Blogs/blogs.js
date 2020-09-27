import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';
import { toast } from 'react-toastify';


import AppSideNav from './../layout/sidenav';
import { tb_options } from '../../../HOC/helpers/tables';
import { tinymceKey } from '../../../HOC/helpers/funcs';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import Modal from './../../Utilities/Modal/modal'


export default function Blogs(props) {

    // states
    const [blogs, setBlogs] = useState([]);
    const [blog_cats, setBlog_cats] = useState([]);
    const [blog_content, setBlog_content] = useState('');
    const [show_modal, setShow_modal] = useState(false);
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [add_flag, setAdd_flag] = useState('A');
    const [blog_id, setBlog_id] = useState('');


    const headers = authHeader();
    const post_blogs = AuthService.API_URL + 'post_blog';
    const fetch_blogs = AuthService.API_URL + 'fetch_blog';
    const fetch_blog_cats = AuthService.API_URL + 'fetch_blog_cats';
    const { register, handleSubmit, errors } = useForm();

    // fetch order formats data 
    useEffect(() => {
        // blogs
        axios.get(fetch_blogs, {
            headers: headers
        }).then(res => {
            setBlogs(res.data.data)
        });

        // categories
        axios.get(fetch_blog_cats, {
            headers: headers
        }).then(res => {
            setBlog_cats(res.data.data)
        });

    }, []);

    const addBlog = () => {
        setAdd_flag('A');
        setTitle('')
        setDescr('')
        setShow_modal(true);
    }

    const editBlog = (id) => {
        setAdd_flag('E');
        setBlog_id(id);
        axios.get(AuthService.API_URL + 'get_blog/' + id).then(res => {
            console.log(res.data);
            setTitle(res.data.title)
            setDescr(res.data.description)
            setBlog_content(res.data.body)
        })
        setShow_modal(true);
    }

    const delBlog = (id) => {
        let data = '';
        axios.post(AuthService.API_URL + 'delBlog/' + id, data, {
            headers: headers
        }).then(res => {
            if (res.data.code === 1) {
                toast.success(res.data.msg);
            } else {
                toast.error('Failed to remove Item');
            }
            setTimeout(() => { window.location.reload() }, 1500)
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
            name: "status",
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
                            <button onClick={() => editBlog(rowData.rowData[0])} className="mr-1 btn btn-success btn-sm"><i className="fa fa-edit"></i> </button>
                            <button onClick={() => delBlog(rowData.rowData[0])} className="btn btn-danger btn-sm"> <i className="fa fa-trash"></i> </button>
                        </>
                    );
                }
            },
        }
    ];

    const tb_data = blogs;

    // fetch cats 
    const renderCats = () => {
        let template = null;
        if (blog_cats.length > 0) {
            template = blog_cats.map((item, i) => (
                <option key={i} value={item.id}> {item.title}</option>
            ))
        }
        return template;
    }


    // blog body changes
    const handleEditorChange = (content, editor) => {
        setBlog_content(content);
    }


    // send data
    const onSubmit = data => {
        // console.log(data);
        let formdata = new FormData(window.document.querySelector("#post_form"));
        formdata.append('body', blog_content)
        let url = null;
        (data.add_flag === 'A') ? url = post_blogs : url = AuthService.API_URL + 'patchBlog/' + blog_id;
        axios.post(url, formdata, {
            headers: headers
        }).then(res => {
            console.log(res);
            if (res.data.code === -1) {
                toast.error("Failed to post Blog, Try again later");
            }else if (res.data.code === 1) {
                setBlogs(res.data.data);
                toast.success("Blog posted Successfully");
            }
            setShow_modal(false);
            // window.location.reload()
        }).catch(
            err => toast.error("Something went wrong!!")
        );
    };

    return (
        <div className=" dashboard-container">
            <div className="row mr-0">
                <div className="col-xs-12 col-sm-2 sidenav_dashboard">
                    <AppSideNav />
                </div>

                <div className="col-sm-10">
                    <h2>Blogs</h2> <hr />

                    <Modal isOpen={show_modal}
                        close={() => setShow_modal(false)}
                        title={'Add|Edit Blog'}
                    >
                        <article>
                            <form
                                id="post_form"
                                className="form"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">

                                    <input type="hidden" value={add_flag} name="add_flag" ref={register()} />
                                    

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="title">Title:</label>
                                            <input
                                                className="form-control"
                                                id="title"
                                                name="title"
                                                value={title}
                                                placeholder="Enter title of the blog"
                                                ref={register({ required: true })}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                            <p className="text_red">{errors.title && " Name is required"}</p>

                                        </div>
                                    </div>
                                    {/* .col-md-6 */}

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="category">Category:</label>
                                            <select
                                                className="form-control"
                                                id="category"
                                                name="blog_category_id"
                                                ref={register({ required: true })}

                                            >
                                                <option defaultValue> -- select -- </option>
                                                {renderCats()}
                                            </select>
                                            <p className="text_red">{errors.blog_category_id && "Category is required"}</p>

                                        </div>
                                    </div>
                                    {/* col-md-4 */}

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="descr">Description:</label>
                                            <textarea
                                                rows={2}
                                                className="form-control"
                                                id="descr"
                                                name="description"
                                                value={descr}
                                                placeholder="Enter description"
                                                ref={register({ required: true })}
                                                onChange={(e) => setDescr(e.target.value)}
                                            />
                                            <p className="text_red">{errors.description && "Description is required"}</p>

                                        </div>
                                    </div>
                                    {/* .col-md-12 */}

                                    <div className="col-sm-12">
                                        <Editor
                                            apiKey={tinymceKey}
                                            init={{
                                                plugins: 'autoresize advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code media',
                                                placeholder: "Write something here"
                                            }}
                                            value={blog_content}
                                            onEditorChange={handleEditorChange}
                                        />
                                    </div>
                                    {/* col-sm-12 */}

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="featured_image">Featured Image:</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="featured_image"
                                                name="featured_image"
                                            />
                                            <p className="text_red">{errors.featured_image && " Image is required"}</p>

                                        </div>
                                    </div>
                                    {/* .col-md-12 */}
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
                        <button className="btn btn-info btn-sm mb-2" onClick={addBlog}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>  Add
                        </button>
                        <MUIDataTable
                            title={"Blogs Table"}
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
