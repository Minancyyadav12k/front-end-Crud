import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="Home">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="About">About</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Signup">Signup</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Login">Login</Link>

                        </li>
                        
                      
                    </ul>
                    <div>
                        <Link className='btn btn-outline-light' to="Addusers">Addusers </Link>
                    
                    </div>
                </div>
            </nav>

        </div>
    )
}

