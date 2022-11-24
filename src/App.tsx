import Login from './components/Login/Login';
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';


function App() {

    return (<HashRouter>
        <Routes>
            <Route path='/home' element={<Homepage />} />
            <Route path='/' element={<Login />} />
        </Routes>
    </HashRouter>)
}

export default App;
