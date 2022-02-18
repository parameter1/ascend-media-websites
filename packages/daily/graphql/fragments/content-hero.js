const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentHeroFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  published
  siteContext {
    path
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
  primarySection {
    id
    name
    alias
    fullName
    canonicalPath
  }
}

`;
