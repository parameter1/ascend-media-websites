const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentExhibitorsFragment on Content {
  id
  type
  primaryImage {
    id
    src
    alt
    isLogo
  }
  siteContext {
    path
  }
}

`;
