import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { getAuthenticatedUser } from '../../actions/userAction';

const ProtectedRoute = ( {component: Component, ...props} ) => {

    const dispatch = useDispatch();

    const { loadingscreen } = useSelector( state => state.systems );
    const { authenticated } = useSelector( state => state.users );

    useEffect(() => {
        if (authenticated === null) dispatch( getAuthenticatedUser() );

        // eslint-disable-next-line 
    }, [])

    return (
        <Route { ...props } render={props => loadingscreen || authenticated !== true? ( 
            <Component {...props} />
        ) : ( 
            <Redirect to="/dashboard" />
        )} />
    );
}

export default ProtectedRoute;