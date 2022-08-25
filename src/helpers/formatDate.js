const time = new Date()
export const CURRENT_YEAR = time.getFullYear()

export const studentDataLS = JSON.parse(localStorage.getItem("studentData")) || []
