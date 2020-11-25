import React, { useEffect, useState } from 'react';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';

import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

import { HideMessagge } from '../../actions/toastAction';

// ------------------------------------------------------
const ToastContainer = styled.div`
    position: absolute; 
    top: 5%; 
    right: 3%;
    max-width: 500px !important;

    & .toast-header {
        & strong {
            font-family: 'Poiret One', cursive;
            font-size: 1.8rem !important;
            letter-spacing: 1px;
            text-transform: lowercase;
            margin-right: 1rem;
        }

        & small {
            font-family: 'Poiret One', cursive;
            font-size: 1.4rem !important;
            margin-left: 2rem;
            margin-right: .5rem;
        }
    }
`;
// ------------------------------------------------------
const Toast = () => {
    const dispatch = useDispatch();
    const [setting, setSetting] = useState({
        border: '',
        icon: ''
    });
    // ------------------------------------------------------
    const { show, status, messagge } = useSelector(state => state.toasts)
    // ------------------------------------------------------
    useEffect(() => {
        $('.toast').toast({ delay: 1000 });

        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (show) {
            switch (status) {
                case 'error':
                    setSetting({
                        border: 'danger',
                        icon: 'fas fa-exclamation-triangle'
                    });
                    break;

                default:
                    break;
            }

            $('.toast').toast('show');
            dispatch( HideMessagge() );
        }

        // eslint-disable-next-line
    }, [show])
    // ------------------------------------------------------
    return ( 
        <ToastContainer className={`toast border border-${setting.border}`}>
            <div className="toast-header">
                <strong className="mr-auto text-danger"> <i className={setting.icon}></i> { messagge }</strong>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
            </div>
        </ToastContainer>
     );
}
 
export default Toast;