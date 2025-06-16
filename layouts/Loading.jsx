import Image from "next/image"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-black h-[100dvh]">
                <Image
                    src='/assets/Images/Loading/loadScreen.gif'
                    alt="AK Logo"
                    width={128}
                    height={128}
                />
            </div>
        </div>
    )
}

export default Loading
