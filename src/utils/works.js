import toDoList from '../images/to_do_list.png';
import calculator from '../images/calculator.png';
import financial from '../images/financial.jpeg';
import rockets from '../images/rockets.png';
import townHall from '../images/Town-hall.png';
import hotelFurPets from '../images/hotel-fur-pets.jpg';

const works = [
  {
    id: 1,
    name: 'To-do List',
    description: 'A to-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. A simple website that allows users to create a To-do list.',
    imageLocation: toDoList,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://celadon-chebakia-cb2406.netlify.app/',
    source: 'https://github.com/chumaachike/portfolio/',
  },
  {
    id: 2,
    name: 'Calculator App',
    description: 'It features all the basic functions you would expect, such as addition, subtraction, multiplication, and division, as well as more advanced functions like trigonometric and logarithmic calculations. The user interface is intuitive and easy to use, with clear buttons and display.',
    imageLocation: calculator,
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Webpack'],
    live: 'https://tourmaline-praline-a8b15b.netlify.app/',
    source: 'https://github.com/Bushido-brown/Tv-shows',
  },
  {
    id: 3,
    name: 'Financial Metrics',
    description: 'This is a React project building a mobile web application to check a list of metrics (numeric values) created using React and Redux.',
    imageLocation: financial,
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://regal-peony-e39c9e.netlify.app/',
    source: 'https://github.com/chumaachike/reactproject.git',
  },

  {
    id: 4,
    name: 'Space Travelers Hub',
    description: 'A JavaScript project for a Leaderboard list app, using webpack and ES6 features, notably modules. This application records scores for a game for different players.',
    imageLocation: rockets,
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://effervescent-choux-235521.netlify.app/',
    source: 'https://github.com/chumaachike/reactproject.git',
  },
  {
    id: 5,
    name: '2020 African Cultural Festival',
    description: 'An online website for a festival in Africa. Designed by the guidelines provided by the Microverse (Cindy Shin Design).',
    imageLocation: townHall,
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://chumaachike.github.io/CapstoneProject1/',
    source: 'https://github.com/chumaachike/CapstoneProject1',
  },

  {
    id: 6,
    name: 'Hotel fur Pets',
    description: 'This is a web application where owners can reserve temporary accomodation for their pets while they are unavailable to tend to the pet.',
    imageLocation: hotelFurPets,
    technologies: ['Javascript', 'React', 'Redux', 'RoR'],
    live: 'https://dogs-appointment-chumaachike.vercel.app/',
    source: 'https://github.com/chumaachike/dogs_appointment.git',
  },
];

export default works;
