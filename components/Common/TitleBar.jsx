
const TitleBar = ({ name, sNo }) => {
    return (
        <div className="flex items-center justify-center text-secondary"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="100">
            <p className="text-xl md:text-3xl font-bold"><span className="text-primary">{sNo} </span>{name}</p>
            <div className="flex bg-gradient-to-r from-third h-[0.1rem] grow ml-5"></div>
        </div>
    )
}

export default TitleBar
