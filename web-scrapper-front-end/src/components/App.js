import React from 'react'
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import LoginPage from './login/LoginPage';


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<RequireAuth loginPath='/login'>
        <LoginPage />
      </RequireAuth>
      }></Route >
      <Route path={'/login'} element={<LoginPage />}></Route>
    </Routes >
  );
}

export default App;
