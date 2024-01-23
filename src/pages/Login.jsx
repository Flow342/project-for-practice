import React, { useContext } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import "../style/Login.css";
import { AuthContext } from "../context";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <div className="container">
            <h1>Логин</h1>
            <form style={{ display: "flex", flexFlow: "column nowrap" }}>
                <MyInput type="text" placeholder="Введите логин"></MyInput>
                <MyInput type="text" placeholder="Введите пароль"></MyInput>
                <MyButton
                    onClick={(e) => {
                        e.preventDefault();
                        setIsAuth(true);
                        localStorage.setItem("auth", "true");
                    }}
                    style={{ marginTop: "5px" }}
                >
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;
