import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile'

const Root = () => {
  // click handler function
  const handleClick = () => {
    console.log('Thanks for clicking!')
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink exact to="/">App</NavLink>
        <NavLink exact activeClassName="red" to="/users">Users</NavLink>
        <NavLink exact activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink exact activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        {/* NavLink with onClick prop */}
        <NavLink exact to="/" onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);