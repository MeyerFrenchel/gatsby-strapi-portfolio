
import TheGiftedPiggyImg from '../assets/thegiftedpiggy.png';
import  LoveGameImg from '../assets/HOMEPAGE.png';
import firstPortfolioImg from '../assets/firstPortfolio.png';
import PigAppImg from '../assets/piggydom.png';
import IoanaNailsImg from '../assets/ioananails.png';
import PigBudgetImg from '../assets/piggybudget.png';


 const proj = [
    {
    id: 1,
    title:"The Gifted Piggy",
    image: {TheGiftedPiggyImg},
    description: "E-commerce website. The objective of this website is to attract the attention of customers and to give them the possibility to buy The Gifted Piggy products directly from the website with the help of Stripe- payment platform.",
    github:"https://github.com/MeyerFrenchel/thegiftedpiggy-ecommerce",
    url: "https://the-gifted-piggy.herokuapp.com/checkout",
    featured: true,
    stack: ["REACT", "REDUX","FIREBASE", "SASS"]
    },
    {
        id: 2,
        title: "lovegame",
        image: {LoveGameImg},
        description: "React project that is built especially for Valentine-Day, with the  purpose of making the user emphasize with his loved one and test  his relationship knowledge in 3 levels like a treasure hunt.",
        github:"https://github.com/MeyerFrenchel/valentine-lovegame",
        url: "https://love-game.netlify.app/",
        featured: true,
        stack: ["REACT", "ROUTER", "HTML-CANVAS", "CSS"]
    },
    {
        id: 3,
        title:"HTML-Sass-JS Portfolio",
        image: {firstPortfolioImg},
        description: "My very first personal portfolio website!",
        github:"https://github.com/MeyerFrenchel/Portfolio",
        url: "https://meyerfrenchel.com/",
        featured: true,
        stack: ["HTML", "SASS", "VANILLAJS", "BOOTSTRAP4"]
    },
    {
        id: 4,
        title:"Piggy Budget App",
        image: {PigBudgetImg},
        description: "Small JavaScript App for keeping our finances in order. Consists in  adding incomes/expenses and track record of our daily spending.",
        github:"https://github.com/MeyerFrenchel/Piggy-Budget",
        url: "https://meyerfrenchel.github.io/Piggy-Budget/",
        featured: false,
        stack: ["HTML", "CSS", "VANILLAJS"]
    },
    {
        id: 5,
        title:"PIG-Game",
        image: {PigAppImg},
        description: "fun game made with JavaScript while learning DOM manipulations  and other JS basics",
        github:"https://github.com/MeyerFrenchel/Pig-Game--DOM",
        url: "https://meyerfrenchel.github.io/Pig-Game--DOM/",
        featured: false,
        stack: ["HTML", "CSS", "VANILLAJS"]
    },
    {
        id: 6,
        title:"Ioana Nails",
        image: {IoanaNailsImg},
        description: "Website made for a nail salon, structured in 3 sections Home, Gallery and Testimonials the client insisted  for a carousel testimonial page.",
        github:"https://meyerfrenchel.github.io/Ioana-Nails/",
        url: "https://meyerfrenchel.github.io/Ioana-Nails/",
        featured: false,
        stack: ["HTML", "CSS", "VANILLAJS"]
    }
]

export default proj;