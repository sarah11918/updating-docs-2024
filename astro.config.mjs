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
					items: [
						{slug: 'design-principles/design-principles'},
						{slug: 'design-principles/modularity'},
						{slug: 'design-principles/hierarchy'},
						{slug: 'design-principles/five-hat-racks'},
						{slug: 'design-principles/progressive-disclosure'},
						{slug: 'design-principles/entry-point'},
						{slug: 'design-principles/desire-line'},
						{slug: 'design-principles/wayfinding'},
						{slug: 'design-principles/immersion'},
						{slug: 'design-principles/consistency'},
						{slug: 'design-principles/forgiveness'},
					]
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
