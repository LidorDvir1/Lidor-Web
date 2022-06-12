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
import Html from '../assets/Skills/html.png';
import Css from '../assets/Skills/css.png';
import Js from '../assets/Skills/js.png';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { AiOutlinePhone } from '@react-icons/all-files/ai/AiOutlinePhone';

const stylesObj = {
  contactIcon: {
    fontSize: '50px',
  },
};

export const navButtons = ['Home', 'About', 'Experience', 'Projects'];

export const projects = [
  {
    name: 'AirTrip',
    description:
      'Cross-platform Mobile app where producers can upload their events and clients can quickly view and join them. Once the event starts the participants can chat with each other.',
    logo: AirTrip,
    skills: [ReactNative, NodeJs, MongoDB, SocketIO, Handlebars],
    background: 'linear-gradient(to top left, #FFC629, #fae29d)',
    images: [
      require('../assets/Projects/AirTrip/img1.jpeg'),
      require('../assets/Projects/AirTrip/img2.jpeg'),
      require('../assets/Projects/AirTrip/img3.jpeg'),
      require('../assets/Projects/AirTrip/img4.jpeg'),
      require('../assets/Projects/AirTrip/img5.jpeg'),
      require('../assets/Projects/AirTrip/img6.jpeg'),
      require('../assets/Projects/AirTrip/img7.jpeg'),
      require('../assets/Projects/AirTrip/img8.jpeg'),
    ],
  },
  {
    name: 'Amber',
    description: 'Cross-platform Jewelry app store',
    logo: Amber,
    skills: [ReactNative, NodeJs, MongoDB],
    background: 'linear-gradient(to top left, #dee0e0, #86c2c2)',
    images: [
      require('../assets/Projects/Amber/img1.jpeg'),
      require('../assets/Projects/Amber/img2.jpeg'),
      require('../assets/Projects/Amber/img3.jpeg'),
      require('../assets/Projects/Amber/img4.jpeg'),
    ],
  },
  {
    name: 'Do You know me?',
    description:
      'Cross-platform Friends game where you can check how much your friends know you.',
    logo: DoYouKnowMe,
    skills: [ReactNative],
    background: 'linear-gradient(to top left, #a5e5fa, #f09a3e)',
    images: [
      require('../assets/Projects/DoYouKnowMe/img1.jpeg'),
      require('../assets/Projects/DoYouKnowMe/img2.jpeg'),
      require('../assets/Projects/DoYouKnowMe/img3.jpeg'),
      require('../assets/Projects/DoYouKnowMe/img4.jpeg'),
    ],
  },
];
export const experienceArr = [
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
];
export const skills = [
  Html,
  Css,
  Js,
  React,
  ReactNative,
  NodeJs,
  MongoDB,
  SocketIO,
];
export const contactOptions = [
  {
    info: 'lidor@gmail.com',
    icon: <AiOutlineMail style={stylesObj.contactIcon} />,
  },
  {
    info: 'https://www.linkedin.com/in/lidor-dvir/',
    icon: <AiFillLinkedin style={stylesObj.contactIcon} />,
  },
  {
    info: '054-5861867',
    icon: <AiOutlinePhone style={stylesObj.contactIcon} />,
  },
];
