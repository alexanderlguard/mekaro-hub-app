import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// ----------------------------------------------------
export const ERROR_FORM_VALIDATION = "ERROR_FORM_VALIDATION";
export const ERROR_FORM_ACTION = "ERROR_FORM_ACTION";
// ----------------------------------------------------
const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// ----------------------------------------------------
const getInitialFieldValues = fields => {
    let values = {};

    for (const key in fields) {
        const field = fields[key];
        values[key] = ( field.hasOwnProperty('default') )? field.default : '';
    }
    
    return values;
}
const getInitialFieldErrors = fields => {
    let errors = {};
    for (const key in fields) 
        if (fields[key].novalidation !== true) 
            errors[key] = '';
    
    return errors;
}
const jsonIsEmpty = obj => {
    for (var key in obj) {
        if (obj[key] !== null && obj[key] !== "")
            return false;
    }
    return true;
}
// ####################################
const Form = ({ children, fields, trycatch=null, action=null, success=null }) => {
    const dispatch = useDispatch();
    // ----------------------------------------------------
    const [value, setValue] = useState(getInitialFieldValues(fields));
    const [errors, setErrors] = useState(getInitialFieldErrors(fields));
    // ----------------------------------------------------
    const successAction = (result) => { 
        _success(result);
    }
    const trycatchAction = e => {
        _trycatch({
            ...e,
            type: ERROR_FORM_ACTION,
        });
    }
    const _trycatch = e => { 
        if ("fields" in e) setErrors(e.fields);
        if (trycatch !== null) trycatch(e); 
    };
    const _success = (result) => { 
        setErrors(getInitialFieldErrors(fields));  
        if (success !== null) success(result);
    }
    const _action = (value, errorAction, successAction) => { 
        if (action!==null) dispatch(action(value, errorAction, successAction)) 
        else _success({ fields: value });
    }; // To make the action operation 
    // ----------------------------------------------------
    const onChangeInputForm = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }
    const onToogleInputForm = e => {
        setValue({
            ...value,
            [e.target.name]: !value[e.target.name]
        });
    }
    // ----------------------------------------------------
    const onSubmitForm =  e => {
        e.preventDefault();
        // Errors list
        let _errors = getInitialFieldErrors(fields);
        // Make a comprobation to know if there some error
        for (const name in errors) {
            const field = fields[name];
            const _value = value[name];

            if (field.isRequired === true)
                if (_value.trim() === "") {
                    _errors[name] = `the ${name} is required`;
                    continue;
                }

            if (field.isEmail === true)
                if (!emailValidation.test(_value)) {
                    _errors[name] = `the ${name} must be an email`;
                    continue;
                }

            if ("minlength" in field) {
                const min = field.minlength;
                if (_value.length < min) {
                    _errors[name] = `the ${name} must be greater than or equal to ${min}`;
                    continue;
                }
            }

            if ("equalfield" in field) {
                const equalfield = field.equalfield;
                if (_value !== value[equalfield.field]) {
                    _errors[name] = `the ${name} must be the same as ${equalfield.alias}`;
                    continue;
                }
            }
        }
        //  Check error
        if (jsonIsEmpty(_errors)) _action(value, trycatchAction, successAction);
        else {
            _trycatch({ 
                type: ERROR_FORM_VALIDATION, 
                fields: _errors
            });   
        }
        
    }
    // ----------------------------------------------------
    return ( 
        <form className="w-50 d-flex flex-column mt-5" autocomplete="off" onSubmit={onSubmitForm} noValidate>
            {React.Children.map(children, child => {
                
                if (typeof child.type !== 'function')
                    return React.cloneElement(child, {  }, child.props.children);
                else {
                    switch (child.type.displayName) {
                        case 'InputText':
                            return React.cloneElement(child, { value: value[child.props.name], error: errors[child.props.name], onChange: onChangeInputForm }, child.props.children);
                        case 'InputGroup':
                            return React.cloneElement(child, { value: value, errors: errors, onChangeInputForm: onChangeInputForm, onToogleInputForm: onToogleInputForm }, child.props.children);
                        default:
                            return React.cloneElement(child, {  }, child.props.children);
                    }

                }
                    
            })}
        </form>
     );
};
 
export default Form;