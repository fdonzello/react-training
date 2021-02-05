import './App.css';

import React from 'react'
import { FetchNews } from './components/fetch/fetch.component';

import { Route, Switch } from 'react-router-dom';
import { NavBar, NavBarProps } from './components/navigation/navbar.component';

import { Hello } from './components/hello/hello.component';
import { Communication } from './components/communication/communication.component';
import { NewsForm } from './components/news/news-form.component';

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
      </Switch>
    </div>
  )
}



export default App;