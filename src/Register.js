







import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
function Register() {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [cpswd,setCpswd]=useState("")
const navigate=useNavigate()
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
    const auth = getAuth()  // email passowrd

    const updateFname = (e) => {
        setFname(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePswd = (e) => {
        setPswd(e.target.value)
    }

    const updateCpswd = (e) => {
        setCpswd(e.target.value)
    }
    // var fullname = document.getElementById("fullname")
    // var email = document.getElementById('email')
    // var mobile = document.getElementById("mobile")
    // var pswd = document.getElementById("password")
    // var cpwsd = document.getElementById("cpassword")

    const signup = (e) => {
        e.preventDefault()
        if (fname == "" || email == "" || pswd == "" | cpswd=="") {
            alert("All fields are manadatory..!")
        }
       if(pswd != cpswd){
        alert("password does not match..!")
       }

        let obj = {
            email: email,
            password: pswd
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                alert("successfully registred")
                navigate("/login")

            })
            .catch((err) => {
                alert("error" + err)
            })
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-md-center">
         
            <form onSubmit={signup} class="col-md-6 col-sm-12 bg-white p-5 rounded shadow">

                <div class="col-12 text-center">
                    <h3 class="text-primary"><strong>Register Now</strong></h3>
                </div>
                <div class="mb-3">
                    <label for="fullname" class="form-label">FullName</label>
                    <input type="text" value={fname} onChange={updateFname} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email"  value={email} onChange={updateEmail} class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" value={pswd} onChange={updatePswd} class="form-control" id="password" />
                </div>
                <div class="mb-3">
                    <label for="confirm_password" class="form-label">Confirm Password</label>
                    <input type="password" value={cpswd} onChange={updateCpswd} class="form-control" id="confirm_password" />
                </div>

                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-rounded w-75">Register Now</button>
                </div>
                <div class="mb-3 text-center text-secondary mt-3">
                    or If you alredy a Member
                </div>
                <div class="d-grid mb-2">
                    <button class="btn btn-google btn-login text-uppercase fw-bold">
                        <Link to="/login">
                            Login Here
                        </Link>

                    </button>
                </div>
            </form>
            </div>
        </div >
    )
}
export default Register;