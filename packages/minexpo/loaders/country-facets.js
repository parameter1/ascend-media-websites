const { getAsArray } = require('@parameter1/base-cms-object-path');
const gql = require('graphql-tag');

const getCountryFacets = async (apolloClient, {
  searchQuery,
  assignedToWebsiteSectionIds,
} = {}) => {
  const input = {
    ...(searchQuery && { search: { query: searchQuery } }),
    ...((assignedToWebsiteSectionIds.length) && {
      assignedToWebsites: { sectionIds: assignedToWebsiteSectionIds },
    }),
  };
  const query = gql`
    query SearchContentQuery($input: BrowseContentQueryInput!) {
      searchContent(input: $input) {
        facets {
          country {
            id
            name
            count
          }
        }
      }
    }
  `;
  const variables = { input };
  const { data } = await apolloClient.query({ query, variables });
  return getAsArray(data, 'searchContent.facets.country');
};

module.exports = async (apolloClient, {
  searchQuery,
  assignedToWebsiteSectionIds = [],
} = {}) => {
  const countryFacets = await getCountryFacets(
    apolloClient,
    {
      searchQuery,
      assignedToWebsiteSectionIds,
    },
  );
  return { countryFacets };
};
