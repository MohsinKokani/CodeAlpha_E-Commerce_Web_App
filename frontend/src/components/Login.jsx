import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ setUserData }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email,
            password
        };
        console.log(data);
        const headers = {
            'Content-Type': 'application/json'
        };

        axios.post(process.env.REACT_APP_FETCH_DOMAIN + '/user/login', data, { headers })
            .then(response => {
                console.log(response);
                setUserData(response.data);
                alert("log in successful");
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data)
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                required
                                autoComplete="off"
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                required
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-1">
                            Login
                        </button>
                        <p className="mt-1">Not a member? <Link to="/signup">Sign-Up</Link></p>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Login;