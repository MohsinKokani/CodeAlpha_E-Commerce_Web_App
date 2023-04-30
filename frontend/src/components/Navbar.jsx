import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ userData, setUserData }) => {
    const [activeLink, setActiveLink] = useState('Home');
    function handleThemeToggle() {
        const body = document.querySelector('body');
        if (body.dataset.bsTheme === 'light') {
            body.dataset.bsTheme = 'dark';
        } else {
            body.dataset.bsTheme = 'light';
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">T-Shirt Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-1">
                                <Link
                                    className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                                    onClick={() => { setActiveLink('Home') }}
                                    aria-current="page"
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link
                                    className={`nav-link ${activeLink === 'T-Shirts' ? 'active' : ''}`}
                                    onClick={() => { setActiveLink('T-Shirts') }}
                                    to="/products">
                                    T-Shirts
                                </Link>
                            </li>
                            <li className="nav-item mx-1 py-2 d-flex">
                                ☀️/🌙
                                <div className="form-check form-switch" >
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleThemeToggle} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>

                            </li>
                            <li className="nav-item mx-1">
                                <Link
                                    className={`nav-link ${activeLink === 'MyCart' ? 'active' : ''}`}
                                    onClick={() => { setActiveLink('MyCart') }}
                                    to="/cart">
                                    Cart
                                    <i className="fa-solid fa-cart-shopping" id="cartIcon">
                                        <span id="cartTag">0</span>
                                    </i>
                                </Link>
                            </li>
                            {
                                //not logged in
                                userData?.email === undefined &&
                                <li className="nav-item mx-1 dropdown">
                                    <Link className="nav-link dropdown-toggle" id="Login" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Login
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/login">User Login</Link></li>
                                        <li><Link className="dropdown-item" to="/">Admin Login</Link></li>
                                    </ul>
                                </li>
                            }
                            {
                                //logged in
                                userData?.email !== undefined &&
                                <li className="nav-item mx-1 dropdown">
                                    <Link className="nav-link dropdown-toggle" id="Login" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userData.email}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item" onClick={() => setUserData({})}>
                                            Logout &nbsp;
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                        </li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;