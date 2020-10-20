import React from "react";
import CakeIcon from '@material-ui/icons/Cake';
import "./Header.css"

function Header() {
    return (
        <div>
            <div className="header">
                <CakeIcon className="header__logo"/>
                <h1>Basically, my own detailed wishlist</h1>
                <CakeIcon className="header__logo"/>
            </div>
                <hr />
        </div>
    )
};

export default Header;