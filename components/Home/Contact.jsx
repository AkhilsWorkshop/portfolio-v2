import TitleBar from "../../components/Common/TitleBar"


const Contact = () => {
    return (
        <div name="Contact" className="h-auto sm:h-screen w-full bg-gradient-to-bl from-bgDark via-black to-black text-secondary">

            <div className="max-w-screen-lg px-10 py-20 sm:px-4 mx-auto flex flex-col justify-center w-full h-full gap-7">

                <TitleBar name="Questions?" sNo="04." />

                <div className="flex flex-col justify-center items-center gap-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="true">
                    <p className="text-lg sm:text-xl text-justify">Feel free to reach me out!</p>
                    <form action={process.env.REACT_APP_FORM} className="flex flex-col w-full md:w-1/2 gap-4" method="POST">

                        <input type="text" name="name" id="name" className="bg-gradient-to-br from-fifth via-bgDark to-fifth border border-sixth text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" placeholder="Your name" required />
                        <input type="email" name="email" id="email" className="bg-gradient-to-br from-fifth via-bgDark to-fifth border border-sixth text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" placeholder="Your email" required />
                        <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gradient-to-br from-fifth via-bgDark to-fifth border border-sixth rounded-lg focus:outline-none" placeholder="Your message" required></textarea>

                        <button className=" text-primary bg-transparent border-2 border-primary uppercase  shadow-xl gap-1 duration-300 hover:bg-primary/20 py-3 px-5 rounded-md mx-auto my-8">Send message</button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact