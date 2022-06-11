import AirTrip from '../assets/Logos/airtrip.png';
import ReactNative from '../assets/Skills/reactnative.png';
import NodeJs from '../assets/Skills/node.png';
import MongoDB from '../assets/Skills/mongodb.png';
import SocketIO from '../assets/Skills/socketio.png';
import Handlebars from '../assets/Skills/handlebars.png';
import DoYouKnowMe from '../assets/Logos/doyouknowme.webp';
import Amber from '../assets/Logos/amber.png';
import React from '../assets/Skills/react.png';
import IDF from '../assets/Logos/idf.jpg';
import ATech from '../assets/Logos/a-tech.jpg';
import ThreePel from '../assets/Logos/3pel.png';

export const projects = [
  {
    name: 'AirTrip',
    description:
      'Cross-platform Mobile app where producers can upload their events and clients can quickly view and join them. Once the event starts the participants can chat with each other.',
    logo: AirTrip,
    skills: [ReactNative, NodeJs, MongoDB, SocketIO, Handlebars],
    video: '',
    background: 'linear-gradient(to top left, #FFC629, #fae29d)',
  },
  {
    name: 'Amber',
    description: 'Cross-platform Jewelry app store',
    logo: Amber,
    skills: [ReactNative, NodeJs, MongoDB],
    background: 'linear-gradient(to top left, #dee0e0, #86c2c2)',
    video: '',
  },
  {
    name: 'Do You know me?',
    description:
      'Cross-platform Friends game where you can check how much your friends know you.',
    logo: DoYouKnowMe,
    skills: [ReactNative],
    background: 'linear-gradient(to top left, #a5e5fa, #f09a3e)',
    video: '',
  },
  {
    name: 'Amber Web',
    description: 'Jewelry web store',
    logo: Amber,
    skills: [React, NodeJs, MongoDB],
    background: 'linear-gradient(to top left, #7c7d7d, #3d3d3c)',
    video: '',
  },
];
export const experienceArr = [
  {
    name: 'Network Administrator',
    companyName: 'IDF',
    description: 'Network Administrator at Tikshov.',
    points: [
      'Working with many customers and technical teams.',
      'Managing and dealing with problems and crises.',
      'Ability to work under pressure and be able to respond quickly.',
    ],
    logo: IDF,
    date: '08 / 2020 - 11 / 2021',
  },
  {
    name: 'Full Stack Developer',
    companyName: 'A Tech',
    description:
      'Startup Grow-house / Tech incubator and Software service provider.',
    points: [
      'Development of new features using React.js, Node.js, Redux.',
      'Translating designs into high-quality code.',
      'Development of reusable components for future use.',
    ],
    logo: ATech,
    date: '11 / 2021 - 02 / 2022',
  },
  {
    name: 'Full Stack Developer',
    companyName: '3Pel.Ventures',
    description:
      '3PEL Ventures is a holdings management group investing in and working with super-talented companies and dedicated to helping entrepreneurs and startups kick off easily and fast.',
    points: [
      'Building complex features and interfaces for React Native applications.',
      'Created and tested Node.js backend code.',
      'Set up and maintained MongoDB database.',
      'Experience with OAuth, Email Verification, Real-Time applications using Socket.io.',
    ],
    logo: ThreePel,
    date: '02 / 2022 - Present',
  },
];
