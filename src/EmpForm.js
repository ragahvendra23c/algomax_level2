import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function EmpForm() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { id, title, description, date }
        fetch("https://web-api-level2-algomax.onrender.com/users", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Succesfuly saved")
                navigate("/list")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="offsetlg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h3 style={{ textAlign: "center" }}>Create User</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input type="text" value={id} disabled="disabled" onChange={e => setId(e.target.value)} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Leave a description here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Due Date</label>
                                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Save</button>
                                            <Link to="/list" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}


export default EmpForm;