import './App.css';
import AddStudent from "./components/add-student";
import EditStudent from "./components/edit-student";

function App() {
    return (
        <div className="App">
            <button onClick={()=>console.log("Добавить")}>Добавить студента</button>
            <AddStudent/>
            <EditStudent/>
        </div>
    );
}

export default App;
