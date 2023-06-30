import self from "../avatar.jpeg";
import { colors } from "../colors/mainGradient";

export const info = {
  firstName: "Akshay",
  lastName: "Sharma",
  initials: "AS",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🇮🇳",
      text: "based in the Chandigarh, India",
    },
    {
      emoji: "💻",
      text: "Full Stack Developer",
    },
    {
      emoji: "📧",
      text: "akshay.sharma0503@gmail.com",
    },
  ],
  socials: [
    {
      link: "/akshayRESUME.pdf",
      icon: "fa fa-file",
      label: "resume",
    },
    {
      link: "https://github.com/captain-Akshay",
      icon: "fa fa-github",
      label: "github",
    },
  ],
  bio: "Hello! I'm Akshay Sharma. I'm a Full Stack Developer. I studied BE.CSE(AIML) at CU, I enjoy building web applications and learning new technologies. I'm currently working at nextjs to be a Full Stack Developer. I'm also a freelancer . I love to travel and explore new places. I'm currently based in India.",
  skills: {
    languages: [
      "TypeScript",
      "JavaScript",
      "Java",
      "C/C++",
      "Python",
      "HTML/CSS",
    ],
    frameworks: [
      "React",
      "React Native",
      "Redux",
      "Material UI",
      "Express",
      "NestJS",
      "Bootstrap/jQuery",
      "Django/Flask",
    ],
    databases: ["MySQl", "MongoDB"],
    cloudServices: ["AWS S3", "Google Analytics", "Heroku", "Netlify"],
    tools: ["Git", "Postman", "npm", "yarn", "Maven"],
  },
  hobbies: [
    {
      label: "Programming",
      emoji: "👨‍💻",
    },
    {
      label: "Video Games",
      emoji: "🎮",
    },
    {
      label: "Anime",
      emoji: "🎞",
    },
    {
      label: "Cooking",
      emoji: "🍳",
    },
    {
      label: "Traveling",
      emoji: "✈️",
    },
  ],
  portfolio: [
    {
      title: "Social Website For NOFAP COMMUNITY",
      live: "https://menford.tech",
      source: "https://github.com/captain-Akshay/NoFap-Community-FrontEnd",
      image: "https://i.imgur.com/ULJGy1p.png",
    },
    {
      title: "AIML project for Image Classification",
      live: null,
      source: "https://github.com/captain-Akshay/ML-project_dogBreed",
      image: "https://i.imgur.com/BZlOIKp.png",
    },
    {
      title: "AIML project for Twitter Sentiment Analysis",
      live: null,
      source: "https://github.com/captain-Akshay/Twitter-sentiment-website",
      image: "https://i.imgur.com/i82ZxoY.png",
    },
  ],
};
