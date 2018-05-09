const buiguidist = require('@bookingcom/buiguidist');

module.exports = buiguidist({
  title: "BUI ❤️  ⚛ ",
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://bstatic.com/libs/bui/4.0.2/bui.css'
        }
      ]
    }
  },
  components: 'src/components/**/[A-Z]*.js',
  defaultExample: true
});