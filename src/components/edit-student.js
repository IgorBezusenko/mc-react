import React, {useContext, useEffect, useState} from 'react';
import {validBirthday, validLink} from "../helpers/validate";
import {Link, useParams} from "react-router-dom";
import {Modal} from "./modal";
import Field from "./form/field";
import {AppContext} from "./app-context/app-context";

const EditStudent = () => {
    const params = useParams()
    const {studentData,editStudentData} = useContext(AppContext)
    const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState({
        firstName: {value: "", isRequired: true, isValid: true},
        lastName: {value: "", isRequired: true, isValid: true},
        birthday: {value: "", isRequired: true, isValid: true},
        portfolio: {value: "", isRequired: true, isValid: true}
    });

    useEffect(() => {
        const data = studentData.find(item => item.id === +params.id)
        if (data) {
            setFormData({
                firstName: {value: data.firstName, isRequired: true, isValid: true},
                lastName: {value: data.lastName, isRequired: true, isValid: true},
                birthday: {value: data.birthday, isRequired: true, isValid: true},
                portfolio: {value: data.portfolio, isRequired: true, isValid: true}
            })
        }
    }, [])

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
        const newItem = {
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            birthday: formData.birthday.value,
            portfolio: formData.portfolio.value,
            id: +params.id
        }

        editStudentData(newItem, +params.id)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        onResetForm()
    }
    return (
        <>
            {modal && <Modal isModal={modal} closeModal={closeModal} title={"Студент обновлен!"}/>}

            <div className="container">

                <h2>Редактирование студента</h2>
                <form onSubmit={onSubmitForm}>

                    <Field value={formData.firstName.value} id={"firstName"} name={"firstName"}
                           setFormData={setFormData} text={"Имя"}
                           type={"text"} placeholder={"Имя"}/>

                    <Field value={formData.lastName.value} id={"lastName"} name={"lastName"}
                           setFormData={setFormData} text={"Фамилия"}
                           type={"text"} placeholder={"Фамилия"}/>

                    <Field value={formData.birthday.value} id={"birthday"} name={"birthday"}
                           setFormData={setFormData} text={"Год рождения"}
                           type={"number"} placeholder={"2000"} isValid={formData.birthday.isValid}
                           validCallback={validBirthday}/>

                    <Field value={formData.portfolio.value} id={"portfolio"} name={"portfolio"}
                           setFormData={setFormData} text={"Портфолио"}
                           type={"text"} placeholder={"https://....."} isValid={formData.portfolio.isValid}
                           validCallback={validLink}/>


                    <Link to="/" className="btn btn-dark me-2">Назад</Link>
                    <button className="btn btn-primary" type={"submit"}>Редактировать</button>
                </form>
            </div>

        </>
    )
};

export default EditStudent;

