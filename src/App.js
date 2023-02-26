import React, { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import AboutPages from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CounterPage from "./Pages/CounterPage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UsersPage from "./Pages/UsersPage";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Jake");

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/counter" />} />
          {/* <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user:id" element={<UserPage />} /> */}
          <Route path="/counter" element={<CounterPage />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
