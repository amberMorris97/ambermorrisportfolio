import React from 'react';
import {
  js_icon,
  react_icon,
  html_icon,
  css_icon,
  java_icon,
  aws_icon,
  docker_icon,
  sass_icon,
  redux_icon,
  node_icon } from './icons';

export const projectDetails = [
  {
    title: 'Jane Rosenzweig',
    main: '/static/images/JR_MAIN.png',
    description: 'Full stack application built for a client needing a business site with blog features. Technologies used: JavaScript, React, Redux, Node.js, HTML5, SASS, MongoDB, Heroku',
    full: 'static/images/JR_FULL.png',
    github: 'https://github.com/ambermorris97/JR-Website',
    demo: 'http://janerosenzweig.com'
  },
  {
    title: 'Dig It',
    main: 'static/images/digit0.png',
    description: 'Full stack application built to collect data about up and coming artists for promotion by allowing users to search Spotify for artists to submit. Technologies used: JavaScript, React, Redux, Node.js, HTML5, CSS, SASS, Python, Flask, PostgreSQL, SpotifyAPI',
    photos: ['static/images/digit1.png', 'static/images/digit2.png', 'static/images/digit3.png'],
    github: 'https://github.com/ambermorris97/digit',
    api: 'https://github.com/amberMorris97/fynfapi'
  },
  {
    title: 'Blockchains Explained',
    main: 'static/images/blockchain0.png',
    description: 'Simple full stack application to teach readers about Blockchain Technology by fetching and displaying real-time block data and explaining each step. Technologies used: JavaScript, React, Redux, Node.js, Spline, HTML5, CSS, SASS, Web3js, Blockchain API, Docker',
    photos: ['static/images/bc_1.png', 'static/images/bc_2.png', 'static/images/bc_3.png'],
    github: 'https://github.com/ambermorris97/blockchains-explained'
  }
];

export const skillsDetails = [
  {
    title: 'Front-End',
    description: 'Technologies: JavaScript, React, Redux, HTML5, CSS, SASS, Material-UI',
  },
  {
    title: 'Back-End',
    description: 'Technologies: Node.js, Java, Spring Framework, Python, Flask, PostgreSQL, MySQL, MongoDB, GraphQL',
  },
  {
    title: 'Dev-Tools',
    description: 'Technologies: Amazon Web Services, Heroku, Git, JIRA, Docker, Kubernetes'
  }
];

export const workDetails = [
  {
    title: 'Full Stack Software Developer (2021-2022)',
    details: `Worked on Redfin's iBuying team to build scalable, highly-reliable, cloud-based Java microservices and React UI features in a CI/CD environment.`,
    icons: [java_icon, js_icon, react_icon, aws_icon],
  },
  {
    title: 'Freelance Developer (2021-Present)',
    details: 'I created and maintain a portfolio and blog application for business professional Jane Rosenzweig.',
    icons: [js_icon, react_icon, redux_icon, node_icon, sass_icon]
  },
  {
    title: 'Tutor @ Wyzant (2021-Present)',
    details: 'I tutor students and junior engineers in problem-solving skills, code debugging, and the following subjects: Vanilla JavaScript, React, Redux, Node.js, Express, and ES6.',
    icons: [js_icon, react_icon, redux_icon, html_icon, css_icon],
  },
]
