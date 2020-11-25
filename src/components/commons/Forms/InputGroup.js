import React from 'react';

const InputGroup = ({children, id, className, value, errors, onChangeInputForm, onToogleInputForm}) => {
    return ( 
        <div id={id} className={className}>
            {React.Children.map(children, child => {
                
                if (typeof child.type !== 'function')
                    return React.cloneElement(child, {  }, child.props.children);
                else {
                    switch (child.type.displayName) {
                        case 'InputText':
                            return React.cloneElement(child, { value: value[child.props.name], error: errors[child.props.name], onChange: onChangeInputForm }, child.props.children);
                        case 'CheckBox':
                            return React.cloneElement(child, { value: value[child.props.name], onToogle: onToogleInputForm }, child.props.children);
                        default:
                            return React.cloneElement(child, {  }, child.props.children);
                    }

                }
                    
            })}
        </div>
    );
}

InputGroup.displayName = "InputGroup";
 
export default InputGroup;