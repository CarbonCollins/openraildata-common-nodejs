const exportSuite = require('./exports');
const documentationSuite = require('./documentation');


module.exports = function() {
  describe('Module Suite', function() {
    documentationSuite();
    exportSuite();
  });
};
