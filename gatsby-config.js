module.exports = { 
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://xwertxy.kro.kr/`,
    // Your Name
    name: 'xwertxy',
    // Main Site Title
    title: `xwertxy | ✨ I make project to build something awesome!`,
    // Description that goes under your name in main bio
    description: `👋 Hello, I am Ace, also known as code deceiver.`,
    // Optional: Twitter account handle
    author: `@xwertxy`,
    // Optional: Github account URL
    github: `https://github.com/xwertxy`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/xwertxy/`,
    // Content of the About Me section
    about: `I am also prominent for abusing Minecraft in any way whatsoever possible. 😂 I am passionate self-taught frontend and backend developer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, stabilization, and code quality of the things I build. Building frameworks, plugins, and virions to create awesome open-source project for pocketmine. I am also an open-source enthusiast and maintainer. I learned a lot from the open-source community and i love how collaboration and knowledge sharing happened through open-source.\n`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ProfanityFilter',
        description:
          'A best profanityfilter for chat with api for plugin developers!',
        link: 'https://github.com/ReinfyTeam/ProfanityFilter',
      },
      {
        name: 'Zuri',
        description:
          'A fast-development ideal anticheat with over 60+ checks for PocketMine-MP.',
        link: 'https://github.com/ReinfyTeam/Zuri',
      },
      {
        name: 'Zuri Lite',
        description:
          'A fast, lightweight, and easy to configure anticheat optimized for combat servers.',
        link: 'https://github.com/ReinfyTeam/ZuriLite',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'ReinfyTeam',
        description: 'Full-Stack Developer, July 2022 - Present',
        link: 'https://github.com/ReinfyTeam',
      },
      {
        name: 'Glaze Network',
        description: 'Full-Stack Developer, December 2016 - Present',
        link: 'https://github.com/GlazeNet',
      },
      {
        name: 'EclipsePE Network',
        description: 'Full-Stack Developer, July 2022 - Present',
        link: 'https://github.com/xqwtxon',
      },
      {
          name: 'LBNHS School Developer'
          description: 'Back-End Developer - January 2023 - Present',
          link: 'https://github.com/lbnhs'
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, Java, PHP, Kotlin',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL, and SQLite',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
