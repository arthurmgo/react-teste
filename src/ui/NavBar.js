import React from 'react';
import { Link } from 'react-router'

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <Link className="navbar-brand" to='/'>{props.logo}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/releases'>Releases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/backlog'>Backlog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/sprints'>Sprints</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;