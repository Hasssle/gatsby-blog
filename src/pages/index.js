import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const numPosts = data.allMarkdownRemark.edges.length
  return (
    <Layout>
      <SEO
        title='Home'
      />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
            <span>
              <small>{node.timeToRead} min read</small>
            </span>
          </Link>
        </div>
      ))}
      <h4>
        {numPosts} {numPosts < 2 ? "Post" : "Posts"}
      </h4>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
