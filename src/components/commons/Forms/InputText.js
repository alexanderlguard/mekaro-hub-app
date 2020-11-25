import React from 'react';

import styled from '@emotion/styled';
import { ErrorMessage } from '../../UI/Commons'
// ------------------------------------------------------------------------
const InputGroup = styled.div`

    overflow: hidden;

    & * {
        font-size: 1.6rem !important;
        background: transparent !important;
        border: none;
    }

    & .input-group-text {
        color: black;
    }


    & input {
        color: black !important;
    
        &::placeholder {
            color: #05080D !important;
        }
    }

    &.dark-theme {
        background-color: #495F73;
        border-radius: 100px;
    }

    &.light-theme {
        background-color: #E6EBEF;
        border-radius: 5px;
    }

    & .input-group-prepend{
        pointer-events: none;
        margin-left: 0.8rem;
    }

    & input {
        font-family: 'Montserrat', sans-serif;

        &::placeholder {
            font-family: 'Montserrat', sans-serif;
            font-style: italic;
        }

        &:focus {
            background: transparent !important;
            box-shadow: none !important;
        }
    }
`;
// ------------------------------------------------------------------------
const InputText = ({ label, theme, type, icon, name, value, error, onChange }) => {
    return ( 
        <div className="form-group mt-3">
            <InputGroup className={`input-group mb-2 ${theme}-theme`}>
                <div className="input-group-prepend">
                    <div className="input-group-text"><i className={icon}></i></div>
                </div>
                <input placeholder={label}  type={type} value={value} name={name} className="form-control" onChange={onChange}/>

                {
                    (error)?
                        (
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-exclamation-circle"></i></span>
                            </div>
                        ) : null
                }
            </InputGroup>
            
            {
                (error)?
                    (
                        <ErrorMessage className="form-text text-muted text-right mt-2 pr-5 text-white">{error}</ErrorMessage>
                    ) : null
            }
        </div>
     );
}

InputText.displayName = "InputText";


export default InputText;