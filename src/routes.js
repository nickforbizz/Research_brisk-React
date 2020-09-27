import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import appHome from './App';
import AppLayout from './HOC/layout/appLayout';
import appLogin from './Components/login/login';

import ProtectedRoute from './HOC/protectedRoute/protected_route';
import Dashboard from './Components/Dashboard/dashboard';
import AdPlaceOrder from './Components/Dashboard/Academic/place_order';
import AdOrders from './Components/Dashboard/Academic/orders';
import AdArchivedOrders from './Components/Dashboard/Academic/archived_orders';
import AdOrderFormats from './Components/Dashboard/Academic/order_formats';
import AdOrderCats from './Components/Dashboard/Academic/order_cats';
import AdOrderLang from './Components/Dashboard/Academic/order_langs';

import AdBlogs from './Components/Dashboard/Blogs/blogs';
import AdArchivedBlogs from './Components/Dashboard/Blogs/archived_blogs';
import AdBlogCats from './Components/Dashboard/Blogs/blog_cats';
import AdBlogger from './Components/Dashboard/Blogs/bloggers';

import AdSettings from './Components/Dashboard/Settings/settings';
import AdOrderView from './Components/Dashboard/Academic/order_view';
import PostView from './Components/Academic/Posts/post_view';
import appNotFound from './Components/NotFound/notfound';

export default function routes(props) {
    return (
        <div>
            <BrowserRouter>
            <AppLayout  {...props}>
                    <Switch>

                        {/* load homepage */}
                        <Route path = "/" exact component={appHome}/> 
                        <Route path = "/login" exact component={appLogin}/> 

                        {/* Authorised routes */}
                        <ProtectedRoute exact={true} path="/dashboard" component={Dashboard} />
                        <ProtectedRoute exact={true} path="/adPlace_order" component={AdPlaceOrder} />
                        <ProtectedRoute exact={true} path="/adOrders" component={AdOrders} />
                        <ProtectedRoute exact={true} path="/adArchived_orders" component={AdArchivedOrders} />
                        <ProtectedRoute exact={true} path="/adOrder_formats" component={AdOrderFormats} />
                        <ProtectedRoute exact={true} path="/adOrder_cats" component={AdOrderCats} />
                        <ProtectedRoute exact={true} path="/adOrder_lang" component={AdOrderLang} />
                        <Route exact={true} path="/adOrder_view/:id" component={AdOrderView} />

                        <ProtectedRoute exact={true} path="/adBlogs" component={AdBlogs} />
                        <ProtectedRoute exact={true} path="/adArchived_blogs" component={AdArchivedBlogs} />
                        <ProtectedRoute exact={true} path="/adBlog_cats" component={AdBlogCats} />
                        <ProtectedRoute exact={true} path="/adBlogger" component={AdBlogger} />
                        <Route exact={true} path="/post_view/:id" component={PostView} />

                        <ProtectedRoute exact={true} path="/adSettings" component={AdSettings} />
                        <Route  component={appNotFound}/> 

                    </Switch>
            </AppLayout>
            </BrowserRouter>
        </div>
    )
}
