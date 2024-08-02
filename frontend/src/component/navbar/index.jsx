import React from "react";
const Navbar = () => {
    return <>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq09qDHjSZcO_6gvi-BTtSsMa2OqKEDeW8ag&s" alt="Logo" />

                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                {/* <div class="navbar-start">
                    

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item is-selected">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div> */}

                <div class="navbar-end">
                    
                    <a className="navbar-item">
                        Home
                    </a>
                    <a className="navbar-item">
                        About
                    </a>
                    <a className="navbar-item">
                        Feedback
                    </a>
                    
                    {/* <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    </>
}
export default Navbar