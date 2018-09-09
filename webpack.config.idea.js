const path = require('path');

// Add module resolution for IDEA coding assistance
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    // Select JS sources
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src/main/js')
    ],
    symlinks: false
  }
};
