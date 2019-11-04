
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import {
  Route as TigerRoute,
  Link as TigerLink,
  Navigation,
  shuffle
} from "react-tiger-transition";

import "react-tiger-transition/styles/main.min.css";


const menuContainerStyle = {style: {height: 100}};
const loginContainerStyle = {style: {backgroundColor: '#9e9e9e'}};
const pagesContainerStyle = (color) => ({
  style: {
    top: 100,
    backgroundColor: color
  }
});

const pages = [
  {
    path: "/",
    backgroundColor: "#2196f3",
    component: <Home />
  },
  {
    path: "/about",
    backgroundColor: "#8bc34a",
    component: <About />
  },
  {
    path: "/dashboard",
    backgroundColor: "#ff9800",
    component: <Dashboard />
  },
  {
    path: "/login",
    backgroundColor: "white",
    component: <Login />
  }
]

export default function BasicExample() {
  document.getElementById("root").style.height = "100vh";
  return (
    <Router>
      <Navigation>
        <TigerRoute
          path={["/","/about", "/dashboard"]}
          exact
          screen
          containerProps={{...menuContainerStyle}}
          forceTransition={() => shuffle({direction: 'bottom'})}
        >
          <Menu />
        </TigerRoute>
        {
          pages.map(page => (
            <TigerRoute
              key={page.path}
              exact
              path={page.path}
              screen
              containerProps={
                page.path === '/login' ?
                { ...loginContainerStyle } :
                pagesContainerStyle(page.backgroundColor)
              }
            >
              {page.component}
            </TigerRoute>
          ))
        }
      </Navigation>
    </Router>
  );
}

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <TigerLink to="/">Home</TigerLink>
        </li>
        <li>
          <TigerLink to="/about">About</TigerLink>
        </li>
        <li>
          <TigerLink to="/dashboard">Dashboard</TigerLink>
        </li>
        <li>
          <TigerLink
            to="/login"
            transition={() => shuffle({direction: 'top'})}
          >
            Login*
          </TigerLink>
        </li>
      </ul>

      <hr />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <TigerLink
        to="/"
        transition={() => shuffle({
          direction: 'top'
        })}
      >
        Home
      </TigerLink>
    </div>
  );
}
