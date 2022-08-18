import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AddStudent from "./components/add-student";
import EditStudent from "./components/edit-student";
import MainPage from "./components/main-page";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>

                        <Route  path="/" element={<MainPage />} />

                        <Route  path="/add-students" element={<AddStudent/>}/>
                        <Route path="/edit-students" element={<EditStudent/>}/>
                        <Route path="*" element={<div>Error page 404</div>} />

                </Routes>
                {/*<Routes>*/}
                {/*    <Route exact path="/" component={MainPage}/>*/}

                {/*    <Route path="/add-students" component={AddStudent}/>*/}
                {/*    <Route path="/edit-students" component={EditStudent}/>*/}
                {/*</Routes>*/}
                {/*<MainPage/>*/}
                {/*<AddStudent/>*/}
                {/*<EditStudent/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
