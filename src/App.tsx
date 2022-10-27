import './App.css';

import React, { Component, FunctionComponent } from 'react'
import { FetchNews } from './components/fetch/fetch.component';

import { Route, Routes, useNavigate, } from 'react-router-dom';
import { NavBar, NavBarProps } from './components/navigation/navbar.component';

import { Hello } from './components/hello/hello.component';
import { Communication } from './components/communication/communication.component';
import { NewsForm } from './components/news/news-form.component';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './components/login/login.component';
import { Amount } from './components/amount/AmountComponent';
import { CommunicationWithoutState } from './components/communication-without-state/communication.without-state';


const routes: NavBarProps = {
  routes: [
    {
      path: "/",
      label: "Home",
      component: <Hello />,
      showInNavigation: true,
    },
    {
      path: "/communication-without-state",
      label: "Communication (No state)",
      component: <CommunicationWithoutState />,
      showInNavigation: true,
    },
    {
      path: "/communication",
      label: "Communication",
      component: <Communication />,
      showInNavigation: true,
    },
    {
      path: "/news",
      label: "News",
      component: <FetchNews />,
      showInNavigation: true,
    },
    {
      path: "/news-add",
      label: "Create News",
      component: <NewsForm />,
      showInNavigation: false,
    },
    {
      path: "/news/:id",
      label: "Create News",
      component: <FetchNews />,
      showInNavigation: false,
    },
    {
      path: "/news-edit/:id",
      label: "Edit News",
      component: <NewsForm />,
      showInNavigation: false,
    },
    {
      path: "/login",
      label: "Login",
      component: <Login />,
      showInNavigation: false,
    },
    {
      path: "/amount",
      label: "Bank",
      component: <Amount />,
      showInNavigation: true,
    },
  ]
}

const buildNavBar = () => <NavBar config={routes} />


const App = () => {
  const navbar = buildNavBar();

  return (
    <div className="App">
      {navbar}

      <Routes>
        {routes.routes.map((route, i) =>
          <Route key={i} path={route.path} element={route.component} />
        )}

        <Route path="/login" element={Login} />
        <Route path="/secured" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      </Routes>
    </div>
  )
}


const UserProfile = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/")
  }

  return (
    <div>
      <h1>User</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}


export default App;