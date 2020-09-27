import React from 'react'
import AuthService from '../../../HOC/helpers/authservice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function sidenav(props) {
    let user = AuthService.getCurrentUser();
    // console.log({ user });
    // if (!user) {
    //     AuthService.logout();
    // }

    const renderAdminFiles = (text, link) => {
        let admin_link = null;
        admin_link = (user.admin) === 'Y' ?
            <li>
                <Link to={`${link}`}><i className="fa fa-plus-circle" aria-hidden="true"></i>  {text} </Link>
            </li>
            : null;
        return admin_link;
    }
    return (
        <>
            <ToastContainer />
            <ul className="nav top_nav" data-spy="affix" data-offset-top="350">
                <li><Link to="/dashboard"> <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard </Link></li>
                <li>
                    <a className="divide" href="#academic_files" data-toggle="collapse"> <i className="fa fa-pencil" aria-hidden="true"></i> Academic <i className="fa fa-caret-down pull-right" aria-hidden="true"></i></a>
                    <ul id="academic_files" className="nav collapse divide">
                        <li><Link to="/adPlace_order"><i className="fa fa-plus-circle" aria-hidden="true"></i> Place Order</Link></li>
                        <li><Link to="/adOrders"><i className="fa fa-search-plus" aria-hidden="true"></i> Your Orders</Link></li>
                        <li><Link to="/adArchived_orders"><i className="fa fa-archive" aria-hidden="true"></i> Archived Orders</Link></li>
                        {renderAdminFiles('Add Formats', 'adOrder_formats')}
                        {renderAdminFiles('Add Categories', 'adOrder_cats')}
                        {renderAdminFiles('Add Lang', 'adOrder_lang')}
                    </ul>
                </li>
                <li>
                    <a className="divide" href="#blog_files" data-toggle="collapse"><i className="fa fa-rss-square" aria-hidden="true"></i> Blogs <i className="fa fa-caret-down pull-right" aria-hidden="true"></i></a>
                    <ul id="blog_files" className="nav collapse divide">
                        {renderAdminFiles('Add Blogs', 'adBlogs')}
                        {renderAdminFiles('Archived Blogs', 'adArchived_blogs')}
                        {renderAdminFiles('Add Categories', 'adBlog_cats')}
                        {renderAdminFiles('Add Blogger', 'adBlogger')}
                    </ul>
                </li>
                <li><Link to="/adSettings"> <i className="fa fa-sliders" aria-hidden="true"></i> Settings</Link></li>
                <li className="#"><a href="#log"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
            </ul>
        </>
    )
}
