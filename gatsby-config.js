module.exports = {
  siteMetadata: {
    title: 'SA Freedom Fighters',
    message: 'site coming soon',
    pattern: 'Weave',
    color: '#212121',
    titleFont: 'Courgette',
    messageFont: 'Roboto',
    social: []
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-under-construction',
        short_name: 'Under Construction',
        start_url: '/',
        background_color: '#4c4c4c',
        theme_color: '#4c4c4c',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
