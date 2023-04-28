// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: 'Property Finder',
          meta: [
            {hid: 'description', name: 'description', content: 'Property Finder Website'},
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
          ],
          link: [
            {rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', integrity: 'sha512-L7MWcK7FNPcwNqnLdZq86lTHYLdQqZaz5YcAgE+5cnGmlw8JT03QB2+oxL100UeB6RlzZLUxCGSS4/++mNZdxw==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer'}
          ]
        }
    },
    routeRules: {
        // Static page generated on all pages
        '/**': { static: true, ssr: false },
    },
    modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/google-fonts'],
    googleFonts: {
        display: 'swap',
        families: {
            Karla: [400, 700],
            Aboreto: [400]
        }
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.GRAPHQL_URL as string
            }
        },
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.GRAPHQL_URL
        }
    }
})

