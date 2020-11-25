import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation  } from 'react-router-dom';

import styled from '@emotion/styled';
import { ImgLogo, HeaderTittle, HeaderSubtittle } from './Commons'

import { LoadTurnOff } from '../../actions/systemAction';
// ---------------------------------------------------------------
const MainContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw !important;
    height: 100vh !important;
    justify-content: center;
    align-items: center;
    background-color: #0D1A26 !important;

    z-index: 99999 !important;

    top: 0 !important;
    left: 0 !important;

    & h1 {
        color: white !important;
    }
`;
// ---------------------------------------------------------------
const LoadingShadow = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const { loadingscreen } = useSelector( state => state.systems );
    const { authenticated } = useSelector( state => state.users );

    useEffect(() => {
        if (loadingscreen && authenticated !== null) {
            dispatch( LoadTurnOff() );

            if (authenticated === false && ![ '/', '/signup' ].includes( location.pathname )) 
                history.push("/");
            else if (authenticated === true && [ '/', '/signup' ].includes( location.pathname )) 
                history.push("/dashboard");
        }
        // eslint-disable-next-line 
    }, [authenticated])

    // -----
    return ( 
        <Fragment>
            { loadingscreen?
                <MainContainer>
                    <ImgLogo src={window.location.origin + '/img/logos/mekarohub-logo-min.png'} />
                    <HeaderTittle>Mekaro Hub</HeaderTittle>
                    <HeaderSubtittle>A new social network control experience </HeaderSubtittle>
                </MainContainer>
                :
                null

            }
        </Fragment>
     );
}
 
export default LoadingShadow;