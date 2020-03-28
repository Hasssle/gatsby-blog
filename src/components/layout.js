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
            description
            lang
          }
        }
      }
    `
  )

  return (
    <div>
      <SEO
        description={data.site.siteMetadata.description}
        lang={data.site.siteMetadata.lang}
      />
      <Header />
      <div className={layoutStyles.container}>{children}</div>
      <Footer />
    </div>
  )
}
