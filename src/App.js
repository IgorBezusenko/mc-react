import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AddStudent from "./components/add-student";
import EditStudent from "./components/edit-student";
import MainPage from "./components/main-page";
import './App.css';
import {Layout} from "./components/Layout";

function App() {
    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route  path={"students"}>
                        <Route index={false} path="add" element={<AddStudent/>}/>
                        <Route index={false} path="edit/:id" element={<EditStudent/>}/>
                    </Route>

                    <Route path="*" element={<div>Error page 404</div>}/>
                </Route>
            </Routes>

        </div>

    );
}

export default App;
