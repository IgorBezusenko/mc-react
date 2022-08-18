import React, {useEffect, useState} from 'react';
import StudentCart from "./student-cart";
import {Link, NavLink} from "react-router-dom";

const MainPage = () => {
    const [studentData, setStudentData] = useState([])
    const items = JSON.parse(localStorage.getItem("studentData"))
    useEffect(() => {
        if (items) {
            setStudentData(items)
        }
    }, [])

    console.log(studentData)
    return (
        <div>
            <Link className="btn btn-primary mb-2" to={"/add-students"}>Добавить студента</Link>
            <div className="d-flex flex-wrap">
                {studentData.length > 0 && studentData.map(item => (

                        <StudentCart key={item.id}
                                     firstName={item.firstName}
                                     lastName={item.lastName}
                                     birthday={item.birthday}
                                     portfolio={item.portfolio}
                        />

                    )
                )}
            </div>
        </div>
    );
};

export default MainPage;