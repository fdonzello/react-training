import './App.css';

import React, { Component, useState } from 'react'
import { ConditionalRendering } from './components/conditional-rendering/conditional.component';
import { Events } from './components/events/events.component';
import { Communication } from './components/communication/communication.component';
import { FetchNews } from './components/fetch/fetch.component';
import { ControlledInputHooks } from './components/uncontrolled-form/uncontrolled.component';

import { Route, Link } from 'react-router-dom';

const App = () =>
  <div className="App">
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/news">news</Link></li>
    </ul>

    <Switch>
      <Route path="/">
        <ControlledInputHooks />
      </Route>
      <Route path="/news">
        <FetchNews />
      </Route>
    </Switch>
  </div>

export default App;



class MyList extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.setState({ items: json }))
  }

  render() {
    return (
      <ul>
        {this.state.items.map(i => <li key={i.id}>{i.title}</li>)}
      </ul>
    )
  }
}


function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Categories</h2>

      <Link to={`${match.url}/books`}>Books</Link>

      <Switch>
        <Route path={`${match.path}/:bookId`}>
          <BookDetail />
        </Route>
      </Switch>
    </div>
  );
}