// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';



// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'COMPADOCX',
  tagline: 'Tài liệu trang COMPA',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ToanNDK/CompaDOC',
        },
        blog: {
          path: 'blog', 
          routeBasePath: 'blog', 
          showReadingTime: true,
          editUrl: 'https://github.com/ToanNDK/CompaDOC',
          blogSidebarTitle: 'Tất cả bài viết',
          blogSidebarCount: 'ALL',
          postsPerPage: 5, 
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Bản quyền © ${new Date().getFullYear()} COMPACLASS.`,
          },
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: 'img/social-card.jpg', 
    navbar: {
      title: 'COMPACLASS',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Release Notes',
        },
        { to: '/blog', label: 'Automation Test', position: 'left' },
       
        {
          href: 'https://github.com/ToanNDK/CompaDOC', 
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Linkedln',
              href: 'https://discord.com/',
            },
            {
              label: 'Facebook',
              href: 'https://twitter.com/', 
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.compaclass.com',
            },
            {
              label: 'COMPACLASS',
              href: 'https://compaclass.com', 
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} COMPACLASS. Built with love.`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.nightOwl,
    },
  })

};

export default config;
