import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../helpers/authservice';

export default function Protected_route(props) {
        const Component = props.component;
        const isAuthenticated = AuthService.getCurrentUser();
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
   
}
