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
    button2Title:"View Code",
    button2Url:"https://github.com/seanholahan/StitchophrenicWebStore",
    type: "webDevelopement"

  },

  { id: 2, title: 'Jamsesh',
    backgroundUrl: "../../assets/img/jamSeshBG.png",
    description:"Web-app allowing users play musical instruments with friends in real time.  This site utalizes ReactJS, Web Sockets, Nginx and ToneJS.",
    button1Title:"View Project",
    button1Url:"https://react-sockets-heroku.herokuapp.com/",
    button2Title:"View Code",
    button2Url:"https://github.com/seanholahan",
    type: "webDevelopement"
  },

  { id: 3, title: 'Portfolio Website',
    backgroundUrl: "../../assets/img/portfolioWebsiteBG.png",
    description:"This website was made using Angular6, Angular Material, and a node.js Server",
    button1Title:"View Project",
    button1Url:"https://github.com/seanholahan",
    button2Title:"View Code",
    button2Url:"https://github.com/seanholahan/HolahanSeanResumeSite",
    type: "animation"
  },
  { id: 3, title: '3D Animations',
    backgroundUrl: "../../assets/img/animationBackground.png",
    description:"Animationed and Modeled in Maya, some small post production done in After Effects",
    button1Title:"View Project",
    button1Url:"https://github.com/seanholahan",
    button2Title:"",
    button2Url:"",
    type: "animation"
  }


];
