import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Docs Sidebar Project 2024',
			social: {
				github: 'https://github.com/sarah11918/updating-docs-2024',
			},
			customCss: [
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'About the project',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'about/introduction' },
						{ label: 'Background', slug: 'about/background' },
						{ label: 'Problem Statement', slug: 'about/project' },
					],
				},
				{
					label: 'Design principles',
					autogenerate: {directory: 'design-principles'},
					
				},
				{
					label: 'Considerations',
					autogenerate: {directory: 'considerations'},
				},
				{
					label: 'Research',
					autogenerate: {directory: 'sources'},
				},
			],
		}),
	],
});
