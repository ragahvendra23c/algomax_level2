import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth"
function Login() {
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
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


    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePswd = (e) => {
        setPswd(e.target.value)
    }



    const login = (e) => {
        e.preventDefault()
        if ( email == "" || pswd == "" ) {
            alert("All fields are manadatory..!")
        }
        let obj = {
            email: email,
            password: pswd
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                alert("Logged in succefully..!")
                navigate("/list")
                window.location.reload()
            })
            .catch((err) => {
                alert("Username or password is incorrect...!")
            })
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <div class="col-12 text-center">
                                    <h3 class="text-primary"><strong>Login Now</strong></h3>
                                </div>
                                <form onSubmit={login}>
                                    <div class="form-floating mb-3">
                                        <input type="email" value={email} onChange={updateEmail} class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label>Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" value={pswd} onChange={updatePswd} class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label>Password</label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label class="form-check-label" >
                                            Remember password
                                        </label>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign in</button>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="d-grid mb-2">
                                        <span> you dont't have account ? </span>
                                        <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                            <Link to="/">
                                                Register Here
                                            </Link>

                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;