import React from "react"
import { useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import layoutStyles from "../styles/layout.module.css"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <Header />
      <div className={layoutStyles.container}>{children}</div>
      <Footer />
    </div>
  )
}
