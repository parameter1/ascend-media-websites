const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentCompanyFragment on Content {
  id
  type
  name
  teaser(input: { maxLength: 0 })
  body

  siteContext {
    path
  }
  ... on ContentCompany {

    address1
    address2
    cityStateZip
    country

    phone
    tollfree
    fax
    website
    title
    mobile
    email
    publicEmail

    youtube {
      username
      channelId
      url
    }

    websiteSchedules {
      section {
        id
        name
        fullName
      }
    }

    # kv data
    yearsInOperation
    numberOfEmployees
    salesChannels
    salesRegion

    # long text data
    productSummary
    servicesProvided
    serviceInformation
    trainingInformation
    warrantyInformation

    # circle image
    primaryImage {
      id
      src(input: { options: { auto: "format", fillColor: "fff", fit: "fill", h: 125, w: 125, } })
      alt
    }

    isLeader: hasWebsiteSchedule(input: { sectionAlias: "leaders" })
    exportInterest: customAttribute(input: { path: "exportInterest" })
    boothNumber: customAttribute(input: { path: "boothNumber" })
    exportMarkets: customAttribute(input: { path: "exportMarkets" })
    marketingInterest: customAttribute(input: { path: "marketingInterest" })
    internationalBusinessInterest: customAttribute(input: { path: "internationalBusinessInterest" })
    alphaGroup: customAttribute(input: { path: "alphaGroup" })
    boothLocation: customAttribute(input: { path: "boothLocation" })
    nmaMember: customAttribute(input: { path: "nmaMember" })

    businessContacts: publicContacts {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format", h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    marketingContacts: marketingContacts {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format", h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
}

`;
