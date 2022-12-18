import Image from 'next/image';
import loading from "../assets/images/loadScreen.gif"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-black min-h-screen">
                <Image src={loading} alt="Loading Site" className="h-32 w-auto lg:h-40" />
            </div>
        </div>
    )
}

export default Loading