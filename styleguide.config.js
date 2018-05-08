const snapguidist = require('snapguidist');

module.exports = snapguidist({
  components: 'src/components/**/[A-Z]*.js',
  defaultExample: true
});