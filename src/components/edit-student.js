import React from 'react';

const EditStudent = () => {
    return (
        <div className="container">
            <h2>Редактировать</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Имя</label>
                    <input type="email" className="form-control" id="firstName"
                           placeholder="Имя"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                    <input type="email" className="form-control" id="lastName"
                           placeholder="Фамилия"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="birthday" className="form-label">Год рождения</label>
                    <input type="email" className="form-control" id="birthday"
                           placeholder="2000"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="portfolio" className="form-label">Портфолио</label>
                    <input type="email" className="form-control" id="portfolio"
                           placeholder="https://....."/>
                </div>

                <div>
                    <button>Назад</button>
                    <button>Редактировать</button>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;