const gql = require('graphql-tag');
const { magazineScheduledContent } = require('@parameter1/base-cms-web-common/block-loaders');
const queryFragment = require('@ascend-media/package-daily/graphql/fragments/content-list');

const getIssue = async (apolloClient, {
  contentId,
} = {}) => {
  const input = { contentId };
  const query = gql`
    query ContentMagazineSchedulesQuery($input: ContentMagazineSchedulesQueryInput!) {
      contentMagazineSchedules(input: $input) {
        edges {
          node {
            issue {
              id
              name
              digitalEditionUrl
              canonicalPath
              fileSrc
              coverImage {
                id
                src
              }
              publication {
                id
                name
                subscribeUrl
                canonicalPath
              }
            }
          }
        }
      }
    }
  `;
  const variables = { input };
  const { data } = await apolloClient.query({ query, variables });
  if (!data
      || !data.contentMagazineSchedules
      || !data.contentMagazineSchedules.edges.length
  ) return null;
  const nodes = data.contentMagazineSchedules.edges
    .map(edge => (edge && edge.node ? edge.node : null))
    .filter(c => c);
  return nodes[0].issue;
};

const loadIssueContent = async (
  apolloClient,
  params = {},
) => magazineScheduledContent(apolloClient, {
  ...params,
});

module.exports = async (apolloClient, {
  contentId,
} = {}) => {
  const issue = await getIssue(apolloClient, { contentId });
  if (!issue) return { issue: null, issueContent: { nodes: [] } };
  const latestIssueId = issue.id;
  const issueContent = await loadIssueContent(apolloClient, {
    limit: 100,
    issueId: latestIssueId,
    excludeContentIds: [contentId],
    queryFragment,
  });
  return { issue, issueContent };
};
