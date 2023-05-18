import {BrowserRouter as Router, Routes,Route ,Link} from "react-router-dom";
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";
import EmpEdit from "./EmpEdit";
import Register from "./Register";
import Login from "./login";
function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/list" element={<EmpList/>} />
                    <Route path="/form" element={<EmpForm/>}/>
                    <Route path="/user/:empid" element={<EmpEdit/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;