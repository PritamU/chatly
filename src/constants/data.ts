import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ProjectInterface, SkillInterface, Social } from "./types";

const navLinks = [
  {
    route: "/",
    title: "Home",
  },
];

const myProjects: ProjectInterface[] = [
  {
    title: "Jiwancare",
    category: "Backend & Web Dashboard",
    description:
      "Order Medicines, Book Medical Tests Appointments and Doctor Appointments Online",
    frameworks: [
      "Next Js",
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Redux",
      "Firebase",
      "Tailwind CSS",
      "Material UI",
    ],
    image: "images/projects/jiwancare.webp",
    externalLink:
      "https://play.google.com/store/apps/details?id=com.ghc.gunamani_healthcare&hl=en_US",
    internalLink: "jiwancare",
  },
  {
    title: "Medguru",
    category: "Backend & Web Dashboard",
    description:
      "Order Medicines Online and get Free Home Delivery on orders above Rs.500",
    frameworks: [
      "Next Js",
      "React Js",
      "Node Js",
      "Express Js",
      "Redux",
      "Firebase",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "images/projects/jiwancare.webp",
    externalLink:
      "https://play.google.com/store/apps/details?id=com.ghc.gunamani_healthcare&hl=en_US",
    internalLink: "medguru",
  },
  {
    title: "USDC Faucet",
    category: "Backend & web dashboard",
    description: "Play Simple Games and Earn Free Crypto Everyday.",
    frameworks: [
      "React Js",
      "Node Js",
      "Express Js",
      "Redux",
      "Firebase",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "images/projects/crypto.webp",
    externalLink:
      "https://play.google.com/store/apps/details?id=com.ufb.usdc_faucetbase",
    internalLink: "usdc-faucet",
  },
];

const skills: SkillInterface[] = [
  {
    title: "Node JS",
    icon: "images/frameworks/node.svg",
    level: 80,
    color: "#83CD29",
  },
  {
    title: "Express JS",
    icon: "images/frameworks/express.svg",
    level: 80,
    color: "orange",
  },
  {
    title: "Typescript",
    icon: "images/frameworks/typescript.svg",
    level: 70,
    color: "#007ACC",
  },
  {
    title: "MongoDB",
    icon: "images/frameworks/mongodb.svg",
    level: 80,
    color: "#46A037",
  },
  {
    title: "Firebase",
    icon: "images/frameworks/firebase.svg",
    level: 70,
    color: "#FCCA3F",
  },
  {
    title: "React JS",
    icon: "images/frameworks/react.svg",
    level: 80,
    color: "#00D8FF",
  },
  {
    title: "Next JS",
    icon: "images/frameworks/next.svg",
    level: 80,
    color: "orange",
  },
  {
    title: "Tailwind CSS",
    icon: "images/frameworks/tailwind.svg",
    level: 60,
    color: "#19B6BA",
  },
  {
    title: "Redux",
    icon: "images/frameworks/redux.svg",
    level: 80,
    color: "#7F54C0",
  },
  {
    title: "MUI",
    icon: "images/frameworks/mui.svg",
    level: 80,
    color: "#0081CB",
  },
];

const socials: Social[] = [
  {
    title: "Github",
    link: "https://github.com/PritamU",
    icon: GitHubIcon,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/pritam-upadhya/",
    icon: LinkedInIcon,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/iampritamupadhya/",
    icon: InstagramIcon,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/pritam.casanova/",
    icon: FacebookIcon,
  },
];

export { myProjects, navLinks, skills, socials };
