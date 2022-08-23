import React from 'react';
import {validRequired} from "../../helpers/validate";
import {CURRENT_YEAR} from "../../helpers/formatDate";
import {RegExpLink} from "../../helpers/regex";

const Field = ({text, type, value, placeholder, id, name, setFormData, isValid, validCallback}) => {
    const onChangeData = (e) => {
        const {name, value} = e.target
        if (name === "birthday") {
            if (value > CURRENT_YEAR) {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: false}}))
            } else {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: true}}))
            }
        }
        if (name === "portfolio") {
            if (!value.match(RegExpLink)) {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: false}}))
            } else {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: true}}))
            }
        }
        setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value}}))
    }

    return (<div className="mb-3">
        <label htmlFor={id} className="form-label ">{text}</label>
        <input type={type} className={`form-control ${isValid === false || !value && " is-invalid"}`} id={id}
               placeholder={placeholder}
               value={value}
               name={name}
               onChange={onChangeData}
        />
        <div
            className="text-danger"> {!value ? validRequired(text) : isValid === false && validCallback(text)}</div>
    </div>);
};

export default Field;