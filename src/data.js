import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLink = [
  {
    id: 1,
    link: "#home",
    title: "home",
  },
  {
    id: 2,
    link: "#about",
    title: "about",
  },
  {
    id: 3,
    link: "#services",
    title: "services",
  },
  {
    id: 4,
    link: "#tours",
    title: "tours",
  },
];

export const socialLink = [
  {
    id: 5,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 6,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 7,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    on: "august 26th, 2020",
    destination: "china",
    days: 6,
    price: 2100,
    img: tour1,
  },

  {
    id: 2,
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    on: "october 1th, 2020",
    destination: "indonesia",
    days: 11,
    price: 1400,
    img: tour2,
  },
  {
    id: 3,
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    on: "september 15th, 2020",
    destination: "hong kong",
    days: 8,
    price: 5000,
    img: tour3,
  },
  {
    id: 4,
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    on: "december 5th, 2019",
    destination: "kenya",
    days: 21,
    price: 3000,
    img: tour4,
  },
];
