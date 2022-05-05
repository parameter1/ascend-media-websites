module.exports = (app) => {
  app.get('/feed', (req, res) => {
    const { query } = req;
    const params = new URLSearchParams(query);
    const limit = Number(params.get('limit'));
    if (limit) {
      const queryParams = {
        pagination: {
          limit,
        },
      };
      res.redirect(`/__rss/all-published-content.xml?input=${encodeURIComponent(JSON.stringify(queryParams))}`);
    } else {
      res.redirect('/__rss/all-published-content.xml');
    }
  });
};
