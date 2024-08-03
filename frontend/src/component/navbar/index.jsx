import React from "react";
import "./navbar.css"
const Navbar = () => {


    const showNavbar = () => {
       
        // alert("yes");
        let mob_nav = document.getElementById("mob-navbar-end");
        if (mob_nav.style.display === "none") {
            mob_nav.style.display = "block"
        }
        else {
            mob_nav.style.display = "none"
        }
    }


    return <>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq09qDHjSZcO_6gvi-BTtSsMa2OqKEDeW8ag&s" alt="Logo" />

                </a>
                <div role="button" onClick={() => { showNavbar() }} class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>

            </div>

            <div id="navbarBasicExample" class="navbar-menu">
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
            <div class="mob-navbar-end" id="mob-navbar-end">

                <a className="navbar-item">
                    Home
                </a>
                <a className="navbar-item">
                    About
                </a>
                <a className="navbar-item">
                    Feedback
                </a>

            </div>
        </nav>
    </>
}
export default Navbar