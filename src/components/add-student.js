import React, {useEffect, useState} from 'react';
import {validBirthday, validLink, validRequired} from "../helpers/validate";

const AddStudent = () => {

    const [firstName, setFirstName] = useState({value: "qwe", formError: false})
    const [lastName, setLastName] = useState({value: "qweqe", formError: false})
    const [birthday, setBirthday] = useState({value: "222", formError: false, isValidBirthday: true})
    const [portfolio, setPortfolio] = useState({value: "", formError: false, isValidLink: true})

    const time = new Date()
    const RegExp = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/g

    function onRequiredValues() {
        if (firstName.value.length !== 0) {
            setFirstName({...firstName, isValid: true})
        } else {
            setFirstName({...firstName, isValid: false})
        }

        if (lastName.value.length !== 0) {
            setLastName({...lastName, formError: true})
        } else {
            setLastName({...lastName, formError: false})
        }

        if (!birthday.value) {
            setBirthday({...birthday, formError: true})
        } else {
            setBirthday({...birthday, formError: false})
        }

        if (portfolio.value.length !== 0) {
            // console.log("RegExp.test(portfolio1)", portfolio.value.match(RegExp))
            setPortfolio({...portfolio, formError: true})
        } else {
            setPortfolio({...portfolio, formError: false})
        }
    }

    function onValidBirthday() {
        if (birthday.value > time.getFullYear()) {
            console.log("год не  должен быть больше текушего")
            setBirthday({...birthday, isValidBirthday: false})
        } else {
            setBirthday({...birthday, isValidBirthday: true})
        }
    }

    function onValidLink() {
        if (portfolio.value.match(RegExp)) {
            // console.log("RegExp.test(portfolio1)", portfolio.value.match(RegExp))
            setPortfolio({...portfolio, isValidLink: true})
        } else {
            setPortfolio({...portfolio, isValidLink: false})
        }
    }

    useEffect(() => {
        onRequiredValues()
        onValidBirthday()
        onValidLink()

    }, [firstName.value, lastName.value, birthday.value, portfolio.value])

    const onChangeFirstName = (e) => {
        setFirstName({...firstName, value: e.target.value})
    }
    const onChangeLastName = (e) => {
        setLastName({...lastName, value: e.target.value})
    }
    const onChangeBirthday = (e) => {
        if (e.target.value > time.getFullYear()) {
            console.log("год должен быть больше текушего")
        }

        setBirthday({...birthday, value: e.target.value})

    }
    const onChangePortfolio = (e) => {
        setPortfolio({...portfolio, value: e.target.value})
        // console.log("RegExp.test(portfolio3)", RegExp.test(portfolio))

    }
    const onResetForm = () => {

    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        const isValid = [firstName.value, lastName.value, birthday.value, portfolio.value].every((el) => !!el === true)

        if (!isValid) {
            console.log({isValid})

            console.log("Все поля должны быть заполнены", firstName, lastName, birthday, portfolio)
            return
        }
        const studentData = JSON.parse(localStorage.getItem("studentData")) || []
        const newData = [...studentData, {
            firstName: firstName.value,
            lastName: lastName.value,
            birthday: birthday.value,
            portfolio: portfolio.value
        }]
        localStorage.setItem("studentData",JSON.stringify(newData))
        // console.log("submit", firstName, lastName, birthday, portfolio)
        // onResetForm()
    }
    return (
        <div className="container">
            <h2>Карточка студента</h2>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Имя</label>
                    <input type="text"
                           className="form-control"
                           id="firstName"
                           name="firstName"
                           placeholder="Имя"
                           value={firstName.value}
                           onChange={onChangeFirstName}
                    />
                    <div className="text-danger"> {firstName.value.length === 0 && validRequired("Имя")}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                    <input type="text" className="form-control" id="lastName"
                           placeholder="Фамилия"
                           value={lastName.value}
                           onChange={onChangeLastName}
                    />
                    <div className="text-danger"> {lastName.value.length === 0 && validRequired("Фамилия")}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="birthday" className="form-label">Год рождения</label>
                    <input type="number" className="form-control" id="birthday"
                           placeholder="2000"
                           value={birthday.value}
                           onChange={onChangeBirthday}

                    />
                    <div className="text-danger"> {!birthday.value ? validRequired("Год рождения"):!birthday.isValidBirthday && validBirthday("Год рождения") }</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="portfolio" className="form-label">Портфолио</label>
                    <input type="text" className="form-control" id="portfolio"
                           placeholder="https://....."
                           value={portfolio.value}
                           onChange={onChangePortfolio}
                    />
                    <div className="text-danger"> {portfolio.value.length === 0 ? validRequired("Портфолио") : !portfolio.isValidLink && validLink("Портфолио")}</div>
                </div>

                <button className="btn btn-primary" type={"submit"}>Создать</button>
            </form>
        </div>
    );
};

export default AddStudent;