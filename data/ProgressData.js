import auLogo from "../assets/Images/Home/About/Timeline/auLogo.png"
import utaLogo from "../assets/Images/Home/About/Timeline/utaLogo.png"
import codingLogo from "../assets/Images/Home/About/Timeline/codingLogo.png"
import target from "../assets/Images/Home/About/Timeline/target.png"

export const progressData = [
    {
        order: "order-last sm:order-first",
        image: auLogo,
        title: "Anna University",
        date: "Sep 2017 - July 2021",
        shortDescription: "Bachelor of Engineering - Computer Science Engineering",
        fullDescription: "",
        additionalClass: "from-third to-[#ffbc04]",
        imgClass: "invert-[100%]",
        delay: 300,
    },
    {
        order: "order-3 sm:order-2",
        image: codingLogo,
        title: "Full Stack Developer (Freelance)",
        date: "Jan 2018 - Aug 2021",
        shortDescription: "Built Dynamic web applications using ReactJS, JavaScript, Bootstrap for local business",
        fullDescription: "",
        additionalClass: "from-[#ffbc04] to-primary",
        imgClass: "",
        delay: 400,
    },
    {
        order: "order-2 sm:order-3",
        image: utaLogo,
        title: "University of Texas at Arlington",
        date: "Aug 2021 - May 2023",
        shortDescription: "Master of Science - Computer Science",
        fullDescription: "",
        additionalClass: "from-primary to-[#00ff0d]",
        imgClass: "",
        delay: 500,
    },
    {
        order: "order-first sm:order-last",
        image: target,
    },

]