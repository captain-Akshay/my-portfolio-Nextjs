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
      text: "based in Chandigarh, India",
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
  bio: "Greetings and salutations! My name is Akshay Sharma, and I proudly serve as a proficient Full Stack Developer. I am currently pursuing my studies in BE.CSE(AIML) at CU, where I am acquiring a robust foundation in the realm of computer science and engineering. My greatest delight lies in the creation of exemplary web applications, all the while keeping a keen eye on the ever-evolving landscape of cutting-edge technologies.",
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
      "Tailwind-CSS",
      "Material UI",
      "Express",
      "NestJS",
      "Bootstrap/jQuery",
      "Django/Flask",
    ],
    databases: ["MySQl", "MongoDB"],
    cloudServices: ["Google Analytics", "Heroku", "Netlify", "AWS"],
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
      title: "Community For Tech Leads to connect and Prompt Engineer",
      live: "https://next-nation.vercel.app/",
      source: "https://github.com/captain-Akshay/my-portfolio-Nextjs",
      image: "https://i.imgur.com/VBEjxSp.png",
    },
    {
      title: "Social Website For NOFAP COMMUNITY",
      live: "https://menford.tech",
      source: "https://github.com/captain-Akshay/NoFap-Community-FrontEnd",
      image: "https://i.imgur.com/ULJGy1p.png",
    },
    {
      title: "AIML project for Image Classification",
      live: "",
      source: "https://github.com/captain-Akshay/ML-project_dogBreed",
      image: "https://i.imgur.com/BZlOIKp.png",
    },
    {
      title: "AIML project for Twitter Sentiment Analysis",
      live: "",
      source: "https://github.com/captain-Akshay/Twitter-sentiment-website",
      image: "https://i.imgur.com/i82ZxoY.png",
    },
  ],
};
