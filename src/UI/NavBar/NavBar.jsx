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
                <Link
                    style={{
                        margin: 5,
                        textDecoration: "none",
                        padding: 10,
                        border: "1px solid teal",
                        color: "black",
                        fontSize: 18,
                    }}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    style={{
                        margin: 5,
                        textDecoration: "none",
                        padding: 10,
                        border: "1px solid teal",
                        color: "black",
                        fontSize: 18,
                    }}
                    to="/posts"
                >
                    Posts{" "}
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
