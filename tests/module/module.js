const exportSuite = require('./exports');

module.exports = function() {
  describe('Module Suite', function() {
    exportSuite();
  });
};
