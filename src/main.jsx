import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './NavBar.jsx'
import { HomeInfo } from './InfoHome.jsx'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById
('root'))

root.render(
  <React.Fragment>
    <NavBar/>
    <HomeInfo/>
    <footer>This page was made in React</footer>
  </React.Fragment>
)