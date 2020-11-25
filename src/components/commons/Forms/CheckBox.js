import React from 'react';

import styled from '@emotion/styled';

const FormGroup = styled.div`

    margin-bottom: 0px !important;

    & * {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem !important;
        text-transform: capitalize;
        font-style: italic;
        font-weight: 200;
        letter-spacing: 1px;

        cursor: pointer;
    }

    &>input {
        width: 1.5rem;
        height: 1.5rem;

        background: #D7B1D7;
    }
`;

const CheckBox = ({ label, id, name, value, onToogle }) => {

    return ( 
        <FormGroup className="form-group form-check">
            <input type="checkbox" className="form-check-input" id={id} name={name} onChange={onToogle} checked={value} />
            <label className="form-check-label ml-3" htmlFor={id}>{label}</label>
        </FormGroup>
     );
}

CheckBox.displayName = "CheckBox";
 
export default CheckBox;