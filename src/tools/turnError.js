export function turnErrorToJSON(errors) {
    let error = {}

    errors.forEach(element => {
        error = {
            ...error,
            [element.param]: element.msg
        }
    });
    
    return error;
}