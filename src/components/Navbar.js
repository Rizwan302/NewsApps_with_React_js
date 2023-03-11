import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="environment">environment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/food">food</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/top">top</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/world">world</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/business">business</Link></li>
                                    <li><Link className="dropdown-item" to="#">entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="#">environment</Link></li>
                                    <li><Link className="dropdown-item" to="#">food</Link></li>
                                    <li><Link className="dropdown-item" to="#">health</Link></li>
                                    <li><Link className="dropdown-item" to="#">politics</Link></li>
                                    <li><Link className="dropdown-item" to="#">science</Link></li>
                                    <li><Link className="dropdown-item" to="#">sports</Link></li>
                                    <li><Link className="dropdown-item" to="#">technology</Link></li>
                                    <li><Link className="dropdown-item" to="#">top</Link></li>
                                    <li><Link className="dropdown-item" to="#">world</Link></li>

                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}