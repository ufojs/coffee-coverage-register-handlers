var path = require('path')

require('coffee-coverage').register({
  path: 'abbr',
  basePath: path.join(__dirname, '..', '..'),
  exclude: ['test', 'node_modules', '.git', 'lib', 'integration-test'],
  initAll: true,
  streamlinejs: false
});
