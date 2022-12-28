import auLogo from "../assets/progressImg/auLogo.png"
import utaLogo from "../assets/progressImg/utaLogo.png"
import codingLogo from "../assets/progressImg/codingLogo.png"
import target from "../assets/progressImg/target.png"
import { StaticImageData } from "next/image"

export const progressData: { order?: string, image?: string | StaticImageData, title?: string, date?: string, shortDescription?: string, fullDescription?: string, additionalClass: string, imgClass?: string }[] = [
    {
        order: "order-last sm:order-first",
        image: auLogo,
        title: "Anna University",
        date: "Sep 2017 - July 2021",
        shortDescription: "Bachelor of Engineering - Computer Science Engineering",
        fullDescription: "",
        additionalClass: "from-fourth to-third",
        imgClass: "invert-[100%]",
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
    },
    {
        order: "order-first sm:order-last",
        image: target,
        additionalClass: "",
    },

]