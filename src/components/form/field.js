import React from 'react';
import { validRequired} from "../../helpers/validate";

const Field = ({text,type, value, placeholder, id, onChangeData, isValid, validCallback}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{text}</label>
            <input type={type} className="form-control" id={id}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChangeData}

            />
            <div
                className="text-danger"> {!value ? validRequired(text) : isValid && validCallback(text)}</div>
        </div>
    );
};

export default Field;