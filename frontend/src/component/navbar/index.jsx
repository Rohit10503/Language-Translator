import React from "react";
import "./navbar.css"
const Navbar = () => {


    const showNavbar = () => {

        // alert("yes");
        let mob_nav = document.getElementById("mob-navbar-end");
        if (mob_nav.style.display === "none"  || mob_nav.style.display === "") {
            mob_nav.style.display = "block"
        }
        else {
            mob_nav.style.display = "none"
        }
    }


    return <>
    <div className="Nav-supreme">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-items" href="#">
                    <img className="Logo" src="src\images\logo1.png" alt="Logo" />

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

        </nav>

        <div className="mob-navbar-end" id="mob-navbar-end">

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
        </div>
    </>
}
export default Navbar