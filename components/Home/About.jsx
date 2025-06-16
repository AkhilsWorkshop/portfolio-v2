// import profilePic from "../../assets/Images/Home/About/myImage.png"
import Progress from "../../components/Home/About/Progress";
import TitleBar from "../../components/Common/TitleBar";

const About = () => {

    return (
        <div name="About" className="min-h-screen lg:h-screen w-full bg-gradient-to-br from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 sm:px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full sm:gap-10">

                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-third gap-5">
                        <div className="flex flex-col gap-10">

                            <TitleBar name="About me" sNo="01." />

                            <p className="sm:text-xl text-third font-slogan"
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="200">
                                Hello! <span className="text-primary">I'm Akhil</span>, and I enjoy leveraging the newest technologies to design and construct applications. I developed websites using Weebly and Wix during my school days, which sparked my interest in <span className="text-primary">web development</span>. I received my Undergraduate degree in Computer Science in 2021. I'm now a student at The University of Texas at Arlington pursuing my Masters in Computer Science.
                            </p>

                        </div>

                        {/* <img src={profilePic} alt="My profile pic" className="w-2/4 md:w-1/4 rounded-full shadow-xl hover:sepia border-2 border-sixth md:rounded-md mx-auto mt-16 md:mt-0 duration-300"></img> */}

                    </div>

                    <Progress />


                </div>
            </div>
        </div>
    )
}

export default About