import './App.css';

import React, { Component, FunctionComponent } from 'react'
import { FetchNews } from './components/fetch/fetch.component';

import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { NavBar, NavBarProps } from './components/navigation/navbar.component';

import { Hello } from './components/hello/hello.component';
import { Communication } from './components/communication/communication.component';
import { NewsForm } from './components/news/news-form.component';
import PrivateRoute from './components/PrivateRoute';
import { Login } from './components/login/login.component';


const routes: NavBarProps = {
  routes: [
    {
      path: "/",
      label: "Home",
      component: <Hello />,
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
  ]
}

const buildNavBar = () => <NavBar config={routes} />


const App = () => {
  const navbar = buildNavBar();

  return (
    <div className="App">
      {navbar}

      <Switch>
        {routes.routes.map((route, i) =>
          <Route key={i} exact path={route.path}>
            {route.component}
          </Route>
        )}

        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/secured" component={UserProfile}></PrivateRoute>
      </Switch>
    </div>
  )
}


const UserProfile = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");

    history.push("/")
  }

  return (
    <div>
      <h1>User</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}


export default App;