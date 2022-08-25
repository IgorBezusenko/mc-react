import React, {useState} from 'react';
import {studentDataLS} from "../../helpers/formatDate";

export const AppContext = React.createContext({})

function AppContextProvider({children}) {
    const [studentData, setStudentData] = useState(studentDataLS)
    const addStudentData = (newData) => {
        localStorage.setItem("studentData", JSON.stringify([...studentDataLS, newData]))
        setStudentData(oldVal => ([...oldVal, newData]))
    }
    const editStudentData = (newData, id) => {
        const dataIndex = studentDataLS.findIndex(item => item.id === id)
        localStorage.setItem("studentData", JSON.stringify([...studentDataLS.slice(0, dataIndex),
            newData,
            ...studentDataLS.slice(dataIndex + 1)
        ]))

        setStudentData(oldVal => ([...oldVal.slice(0, dataIndex),
            newData,
            ...oldVal.slice(dataIndex + 1)
        ]))
    }

    return (
        <AppContext.Provider value={
            {
                studentData,
                addStudentData,
                editStudentData
            }
        }>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;