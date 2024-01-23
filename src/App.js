import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './style/App.css';
import NavBar from "./UI/NavBar/NavBar";
import { privateRoutes, publicRoates } from "./router/Router";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <NavBar />
        {isAuth ?
          <Routes>
            {privateRoutes.map((item, index) => {
              return <Route key={index} path={item.path} element={item.element} />
            })}
          </Routes>
          :
          <Routes>
            {publicRoates.map((item, index) => {
              return <Route key={index} path={item.path} element={item.element} />
            })}
          </Routes>
        }
      </BrowserRouter >
    </AuthContext.Provider>
  );
}
export default App; 
