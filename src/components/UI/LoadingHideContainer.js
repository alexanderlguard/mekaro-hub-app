import React, { Fragment, useEffect } from 'react';

import { useSelector } from 'react-redux';

const LoadingHideContainer = (props) => {

    const { loadingscreen } = useSelector( state => state.systems );

    useEffect(() => {
        if (!loadingscreen) {
            
        }
    }, [loadingscreen])

    return ( 
        <Fragment>
            {  !loadingscreen? props.children : null }
        </Fragment>
     );
}
 
export default LoadingHideContainer;