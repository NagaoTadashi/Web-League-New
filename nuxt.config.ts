// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'nuxt-vuefire',
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error - vite-plugin-vuetify is not typed
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
	],
	ssr: true,
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Web League',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					rel: 'icon',
					type: 'image/svg',
					href: '/web_league_logo.svg',
				},
			],
		},
	},
	build: {
		transpile: ['vuetify'],
	},
	compatibilityDate: '2024-11-01',
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
	vuefire: {
		auth: {
			enabled: true,
			sessionCookie: true,
		},
		config: {
			projectName: process.env.PROJECT_NAME,
			projectId: process.env.PROJECT_ID,
			projectNumber: process.env.PROJECT_NUMBER,
			apiKey: process.env.API_KEY,
			authDomain: process.env.AUTH_DOMAIN,
			storageBucket: process.env.STORAGE_BUCKET,
			messagingSenderId: process.env.MESSAGING_SENDER_ID,
			appId: process.env.APP_ID,
			measurementId: process.env.MEASUREMENT_ID,
		},
	},
})
