import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <div className="navbar">
            <MyButton
                onClick={(e) => {
                    e.preventDefault();
                    setIsAuth(false);
                    localStorage.removeItem("auth");
                }}
            >
                Exit
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts </Link>
            </div>
        </div>
    );
};

export default NavBar;
