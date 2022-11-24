import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

function App() {

    return (<HashRouter>
        <Routes>
            <Route path='/home' element={<Homepage />} />
            <Route path='/' element={<Login />} />
        </Routes>
    </HashRouter>)
}

export default App;
