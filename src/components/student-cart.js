const StudentCart = ({firstName, lastName, birthday, portfolio}) => {
    return (
        <div className="card me-1 mb-1" style={{width: "18rem"}}>
            <div className="card-body">
                <div><b className="card-title">Имя: </b> <span>{firstName}</span></div>
                <div><b className="card-title">Фамилия: </b> <span>{lastName}</span></div>
                <div><b className="card-title">Год рождения: </b> <span>{birthday}</span></div>
                <div><b className="card-title">Портфолио: </b> <span>{portfolio}</span></div>
                <button className="btn btn-dark me-2">Назад</button>
                <button className="btn btn-primary">Редактировать</button>
            </div>
        </div>
    );
};


export default StudentCart;