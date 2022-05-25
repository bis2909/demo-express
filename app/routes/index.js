const checkHealthRouter = require('./check-health');
const postsRouter = require('./posts');

module.exports = function(app) {
  app.use('/check-health', checkHealthRouter);
  app.use('/posts', postsRouter);
};
