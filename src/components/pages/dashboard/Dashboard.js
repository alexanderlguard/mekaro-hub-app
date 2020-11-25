import React from 'react';

import { useSelector } from 'react-redux'

const Dashboard = () => {

    const { userAuth } = useSelector( state => state.users );

    return ( 
        <h1 className="text-white text-center">Welcome: {userAuth.email}</h1>
    );
}
 
export default Dashboard;