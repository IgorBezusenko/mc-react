import {useMemo} from "react";
import {Link} from "react-router-dom";
import {CURRENT_YEAR} from "../helpers/formatDate";

const StudentCart = ({firstName, lastName, birthday, portfolio, id}) => {
    const studentYear = CURRENT_YEAR - (+birthday)
    const birthLastEl = studentYear.toString().length - 1
    const years = studentYear.toString().charAt(birthLastEl)

    const calculation = useMemo(() => {
        switch (years) {
            case "1":
                return "год"
            case "2":
            case "3":
            case "4":
                return "года"
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                return "лет"
            default :
                break;
        }
    }, [years])

    return (
        <div className="card me-1 mb-1" style={{width: "18rem"}}>
            <div className="card-body">
                <div><b className="card-title">Имя: </b> <span>{firstName}</span></div>
                <div><b className="card-title">Фамилия: </b> <span>{lastName}</span></div>
                <div><b className="card-title">Год рождения: </b> <span>{studentYear} ({calculation})</span></div>
                <div><b className="card-title">Портфолио: </b> <span>{portfolio}</span></div>
                <Link to={`/students/edit/${id}`} className="btn btn-primary">Редактировать</Link>
            </div>
        </div>
    );
};


export default StudentCart;