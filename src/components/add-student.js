import React, {useEffect, useState} from 'react';
import {validBirthday, validLink} from "../helpers/validate";
import {Link} from "react-router-dom";
import {Modal} from "./modal";
import Field from "./form/field";

const AddStudent = () => {
    const [modal, setModal] = useState(false)

    const [formData, setFormData] = useState({
        firstName: {value: "", isRequired: true, isValid: true},
        lastName: {value: "", isRequired: true, isValid: true},
        birthday: {value: "", isRequired: true, isValid: true},
        portfolio: {value: "", isRequired: true, isValid: true}
    });

    const time = new Date()
    const currentYear = time.getFullYear()
    const RegExp = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/g;

    const onChangeData = (e) => {
        const {name, value} = e.target
        if (name === "birthday") {
            if (value > currentYear) {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: false}}))
            } else {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: true}}))
            }
        }
        if (name === "portfolio") {
            if (!value.match(RegExp)) {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: false}}))
            } else {
                setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value, isValid: true}}))
            }
        }
        setFormData(oldVal => ({...oldVal, [name]: {...oldVal[name], value}}))
    }

    const onResetForm = () => {
        setFormData({
            firstName: {value: "", isRequired: true, isValid: true},
            lastName: {value: "", isRequired: true, isValid: true},
            birthday: {value: "", isRequired: true, isValid: true},
            portfolio: {value: "", isRequired: true, isValid: true}
        })
    }


    const onSubmitForm = (e) => {
        e.preventDefault()
        const isValid = [...Object.values(formData.firstName), ...Object.values(formData.lastName), ...Object.values(formData.birthday), ...Object.values(formData.portfolio)].every((el) => !!el === true)
        if (!isValid) {
            return
        }
        const studentData = JSON.parse(localStorage.getItem("studentData")) || []
        const newData = [...studentData, {
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            birthday: formData.birthday.value,
            portfolio: formData.portfolio.value,
            id: Date.now()
        }]

        localStorage.setItem("studentData", JSON.stringify(newData))
        setModal(true)

    }

    const closeModal = () => {
        setModal(false)
        onResetForm()
    }
    return (
        <>
            {modal && <Modal isModal={modal} closeModal={closeModal} title={"Студент добавлен!"}/>}
            <div className="container">

                <h2>Карточка студента</h2>
                <form onSubmit={onSubmitForm} >

                    <Field value={formData.firstName.value} id={"firstName"} name={"firstName"}
                           onChangeData={onChangeData} text={"Имя"}
                           type={"text"} placeholder={"Имя"}/>
                    <Field value={formData.lastName.value} id={"lastName"} name={"lastName"} onChangeData={onChangeData}
                           text={"Фамилия"}
                           type={"text"} placeholder={"Фамилия"}/>
                    <Field value={formData.birthday.value} id={"birthday"} name={"birthday"} onChangeData={onChangeData}
                           text={"Год рождения"}
                           type={"number"} placeholder={"2000"} isValid={formData.birthday.isValid}
                           validCallback={validBirthday}/>
                    <Field value={formData.portfolio.value} id={"portfolio"} name={"portfolio"}
                           onChangeData={onChangeData} text={"Портфолио"}
                           type={"text"} placeholder={"https://....."} isValid={formData.portfolio.isValid}
                           validCallback={validLink}/>


                    <Link to="/" className="btn btn-dark me-2">Назад</Link>
                    <button className="btn btn-primary" type={"submit"}>Создать</button>
                </form>
            </div>

        </>
    )
};

export default AddStudent;

