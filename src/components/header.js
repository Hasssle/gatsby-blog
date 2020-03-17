import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"

export default () => (
  <header className={headerStyles.header}>
    <h1>Gatsby Blog</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
)
