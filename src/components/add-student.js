import React, {useState} from 'react';
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
                <form onSubmit={onSubmitForm}>

                    <Field value={formData.firstName.value} id={"firstName"} name={"firstName"}
                           text={"Имя"}
                           type={"text"} placeholder={"Имя"}
                           setFormData={setFormData}/>

                    <Field value={formData.lastName.value} id={"lastName"} name={"lastName"}
                           text={"Фамилия"}
                           type={"text"} placeholder={"Фамилия"}
                           setFormData={setFormData}/>

                    <Field value={formData.birthday.value} id={"birthday"} name={"birthday"}
                           text={"Год рождения"}
                           type={"number"} placeholder={"2000"} isValid={formData.birthday.isValid}
                           validCallback={validBirthday}
                           setFormData={setFormData}/>

                    <Field value={formData.portfolio.value} id={"portfolio"} name={"portfolio"}
                           text={"Портфолио"}
                           type={"text"} placeholder={"https://....."} isValid={formData.portfolio.isValid}
                           validCallback={validLink}
                           setFormData={setFormData}/>


                    <Link to="/" className="btn btn-dark me-2">Назад</Link>
                    <button className="btn btn-primary" type={"submit"}>Создать</button>
                </form>
            </div>

        </>
    )
};

export default AddStudent;

