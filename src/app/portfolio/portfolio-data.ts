/**
 * Created by seanHolahan on 10/15/18.
 */
import {Project} from './project'


export const PORTFOLIO: Project[] = [
  { id: 1, title: 'Stitchophrenic',
    backgroundUrl: "../../assets/img/stitchophrenicBG.png",
    description:" E-commerce platform made for my clothing brand, Stitchophrenic. Each piece is up-cycled and one of a kind! This site was made With MongoDB, ExpressJS, AngularJS and NodeJS.",
    button1Title:"View Project",
    button1Url:"http://www.stitchophrenic.com/#/",
    button1Display: 'block',
    button2Title:"View Code",
    button2Url:"https://github.com/seanholahan/StitchophrenicWebStore",
    type: ["webDevelopement", "UX/UI"],
    button2Display: 'block',
    modalButtonDisplay: 'none'

  },

  { id: 2, title: 'Jamsesh',
    backgroundUrl: "../../assets/img/jamSeshBG.png",
    description:"Web-app allowing users play musical instruments with friends in real time.  This site utalizes ReactJS, Web Sockets, Nginx and ToneJS. ",
    button1Title:"View Project",
    button1Url:"https://react-sockets-heroku.herokuapp.com/",
    button1Display: 'block',
    button2Title:"View Code",
    button2Url:"https://github.com/BoRenChen/React-Sockets-Heroku-JamSesh",
    type: ["webDevelopement", "UX/UI"],
    button2Display: 'block',
    modalButtonDisplay: 'none'
  },

  { id: 3, title: 'Portfolio Website',
    backgroundUrl: "../../assets/img/portfolioWebsiteBG.png",
    description:"This website was made using Angular6, Angular Material, and a node.js Server",
    button1Title:"View Project",
    button1Url:"/home",
    button1Display: 'none',
    button2Title:"View Code",
    button2Url:"https://github.com/seanholahan/HolahanSeanResumeSite",
    type: ["webDevelopement", "UX/UI"],
    button2Display: 'block',
    modalButtonDisplay: 'none'
  },
  { id: 4, title: '3D Animations',
    backgroundUrl: "../../assets/img/animationBackground.png",
    description:"Animated and Modeled in Maya, some small post production done in After Effects",
    button1Title:"View Project",
    button1Url:"https://github.com/seanholahan",
    button1Display: 'none',
    button2Title:"",
    button2Url:"",
    type: ["animation"],
    button2Display: 'none',
    modalButtonDisplay: 'block',
    modalType: 'video',
    modalButtonTitle: 'View Videos',
    modalData:['92SfnUlgupQ', 'AqhUISrJ9Wk']
  },

  { id: 5, title: 'Fanswipe Loading Game',
    backgroundUrl: "../../assets/img/fanswipeCoverPhoto.png",
    description:"UI design for the loading game of a mobile app, made with Sketch",
    button1Title:"View Designs",
    button1Url:"https://github.com/seanholahan",
    button1Display: 'none',
    button2Title:"",
    button2Url:"",
    button2Display: 'none',
    type: ["UX/UI"],
    modalButtonDisplay: 'block',
    modalType: 'photo',
    modalButtonTitle: 'View Designs',
    modalData: ["../../assets/img/fanswipe1.png","../../assets/img/fanswipe2.png","../../assets/img/fanswipe3.png"]
  },
  { id: 6, title: '2D Animations',
    backgroundUrl: "../../assets/img/2DAnimationCover.png",
    description:"Animated in After Effects, Rigged in Illustrator",
    button1Title:"View Project",
    button1Url:"https://github.com/seanholahan",
    button1Display: 'none',
    button2Title:"",
    button2Url:"",
    type: ["animation"],
    button2Display: 'none',
    modalButtonDisplay: 'block',
    modalType: 'video',
    modalButtonTitle: 'View Videos',
    modalData:['nfVEQlR7c3o']
  }
];
