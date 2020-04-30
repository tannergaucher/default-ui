import { graphql, useStaticQuery } from "gatsby"

export const useExampleImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/sign/" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return file.childImageSharp
}
