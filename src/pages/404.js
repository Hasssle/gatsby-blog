import React from "react"
import Layout from "../components/layout"
import errorStyles from "../styles/404.module.css"

export default () => (
  <Layout>
    <div className={errorStyles.error}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <a href="/">Go Home</a>
    </div>
  </Layout>
)
