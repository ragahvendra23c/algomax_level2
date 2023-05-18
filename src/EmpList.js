import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth,signOut } from "firebase/auth"
function EmpList() {
    const [data, setData] = useState(null)
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        loadData(0, 1)
    }, [])

    const loadData = () => {
        fetch("https://web-api-level2-algomax.onrender.com/users")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }
    // delete Functonality
    const onDelete = (id) => {
        if (window.confirm("Do you want delete?")) {
            fetch("https://web-api-level2-algomax.onrender.com/users/" + id, {
                method: "DELETE"
            })
                .then(() => {
                    alert("Deleted successfully..!!")
                    location.reload()
                })
        }
    }

    // search functionality
    const SearchData = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        return await axios.get(`https://web-api-level2-algomax.onrender.com/users?q=${value}`)
            .then((res) => {
                setData(res.data)
                setValue("")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    // reset functinality
    const reset = (e) => {
        e.preventDefault()
        fetch("https://web-api-level2-algomax.onrender.com/users")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
    }


    //   Edit redirect
    const onEdit = (id) => {
        navigate("/user/" + id)
    }



// logout functionality

    const firebaseConfig = {
        apiKey: "AIzaSyBesU-jmSlCe5SqWc12uylr1zu3agv5osY",
        authDomain: "signup-5f3f5.firebaseapp.com",
        projectId: "signup-5f3f5",
        storageBucket: "signup-5f3f5.appspot.com",
        messagingSenderId: "549475749271",
        appId: "1:549475749271:web:e1054654c3a500688dc8d2",
        measurementId: "G-Y1JFBEQPHZ"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth()

    const logout = (e) => {
        e.preventDefault()
        signOut(auth)
            .then(() => {
                alert("Logged out succefully..!")
                navigate("/login")
                location.reload()
            })
            .catch((err) => {
                alert("error "+err)
            })
    }

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">User List</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                   
                       
                        <form class="d-flex" role="search" onSubmit={logout}>
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button class="btn btn-outline-success" type="submit">Logout</button>
                        </form>
                 
                </div>
            </nav>
            <div className="">
                <div className="card-title">


                    {/* <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Search</label>
                            <input type="text" value={value} onChange={SearchData} className="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary">Search</button>
                        {/* <button onClick={reset} class="btn btn-primary">Reset</button> 
                    </form> */}

                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2">
                            <Link to="/form" className="btn btn-success">
                                Add New User(+)
                            </Link>
                        </div>
                        <div className="col-sm-3">
                            <input type="text" value={value} placeholder="Filter Records..." onChange={SearchData} className="form-control" />

                        </div>
                        <div className="col-sm-1">
                            <button onClick={handleSubmit} class="btn btn-primary">Search</button>
                        </div>
                        <div className="col-sm-1">
                            <button onClick={reset} class="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    {/* <select  style={{ float: "right", width: "150px" }} value={sort} onChange={sortData} class="form-select" aria-label="Default select example">
                        
                            <option selected>Sort By Name</option>
                            {options.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select> */}


                    <br />
                    <table className="table table-bordred">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <a onClick={() => { onDelete(item.id) }} className="btn btn-danger">Delete</a>
                                        <a onClick={() => { onEdit(item.id) }} className="btn btn-primary" style={{ marginLeft: "10px" }}>Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmpList;
