const path = require('path')

module.exports = {
    plugins: [
        ['@vuepress/google-analytics', { ga: 'UA-170280049-1'}],
        '@vuepress/last-updated',
        '@vuepress/medium-zoom'
      ],
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true,
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-imsize'))
        }
    }
}