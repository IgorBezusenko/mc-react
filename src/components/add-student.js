import React, {useState} from 'react';

const AddStudent = () => {
    const [formData, setFormData] = useState({
        firstName: "1",
        lastName: "1",
        birthday: "1",
        portfolio: ""
    })
    const {firstName, lastName, birthday, portfolio} = formData
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [birthday, setBirthday] = useState("")
    // const [portfolio, setPortfolio] = useState("")

    const time = new Date()
    console.log({time: time.getFullYear()})
    const onChangeFirstName = (e) => {
        setFormData({...formData, firstName: e.target.value})
    }
    const onChangeLastName = (e) => {
        setFormData({...formData, lastName: e.target.value})
    }
    const onChangeBirthday = (e) => {
        if (e.target.value > time.getFullYear()) {
            console.log("год должен быть больше текушего")
        }

        setFormData({...formData, birthday: e.target.value})

    }
    const onChangePortfolio = (e) => {
        setFormData({...formData, portfolio: e.target.value})
        const RegExp = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/g
        if (portfolio.match(RegExp)) {
            console.log("RegExp.test(portfolio1)", portfolio.match(RegExp))
        }
    }
    const onResetForm = () => setFormData({firstName: "", lastName: "", birthday: "", portfolio: ""})

    const onSubmitForm = (e) => {
        e.preventDefault()
        const isValid = [firstName, lastName, birthday, portfolio].every((el) => !!el === true)

        if (!isValid) {
            console.log({isValid})
            console.log("Все поля должны быть заполнены", firstName, lastName, birthday, portfolio)
            return
        }

        console.log("submit", firstName, lastName, birthday, portfolio)
        // onResetForm()
    }
    return (
        <div className="container">
            <h2>Добавить</h2>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Имя</label>
                    <input type="text"
                           className="form-control"
                           id="firstName"
                           name="firstName"
                           placeholder="Имя"
                           value={firstName}
                           onChange={onChangeFirstName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                    <input type="text" className="form-control" id="lastName"
                           placeholder="Фамилия"
                           value={lastName}
                           onChange={onChangeLastName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="birthday" className="form-label">Год рождения</label>
                    <input type="number" className="form-control" id="birthday"
                           placeholder="2000"
                           value={birthday}
                           onChange={onChangeBirthday}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="portfolio" className="form-label">Портфолио</label>
                    <input type="text" className="form-control" id="portfolio"
                           placeholder="https://....."
                           value={portfolio}
                           onChange={onChangePortfolio}
                    />
                </div>

                <button type={"submit"}>Создать</button>
            </form>
        </div>
    );
};

export default AddStudent;