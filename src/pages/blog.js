import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCards from "../components/blogcards"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    {/* <h1 style={{backgroundColor: 'green'}}>{data.site.siteMetadata.title}</h1> */}
    <div className="row">
        <div className="col-12 d-flex justify-content between">
        {
            data.allMarkdownRemark.edges.map((item,index)=> {
                return (
                <BlogCards title={item.node.frontmatter.title} author={item.node.frontmatter.author} description={item.node.frontmatter.description} url={item.node.frontmatter.path}  date={item.node.frontmatter.date} />
            );
            })
        }
        </div>
    </div> 
   
    
  </Layout>
);

export default SecondPage;

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        description
                        author
                    }
                }
            }
        }
    }
  `