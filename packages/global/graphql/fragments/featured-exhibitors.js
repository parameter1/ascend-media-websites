const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentFeaturedExhibitorsFragment on Content {
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
