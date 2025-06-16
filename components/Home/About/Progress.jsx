import { progressData } from '@/data/ProgressData';
import { v4 as uuidv4 } from 'uuid';

const Progress = () => {
    return (
        <div className="sm:bg-gradient-to-br from-fifth via-bgDark to-fifth sm:shadow-2xl rounded-md"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400">

            <div className="hidden sm:flex justify-center items-center sm:bg-bgDark py-1 rounded-t-md sm:shadow-xl sm:border-b border-b-sixth">
                <p className="text-third/70 font-semibold text-lg tracking-widest">My Progress</p>
            </div>

            <ol className="mt-6 grid grid-flow-row sm:grid-flow-col gap-x-1 justify-center p-5">

                {progressData.map((eachItem) => (
                    <li key={uuidv4()} className={`relative flex flex-row sm:flex-col ${eachItem.order}`}>

                        <div className="flex flex-col-reverse sm:flex-row items-center grow-0 shrink-0">

                            <img src={eachItem.image} alt="AU logo" className={`z-10 w-10 aspect-square ${eachItem.imgClass}`} />

                            <div className={`flex w-[1.5px] sm:w-full bg-gradient-to-b sm:bg-gradient-to-r h-full sm:h-[1.5px] ${eachItem.additionalClass}`}></div>

                        </div>

                        <div className="flex sm:flex-col h-full flex-col-reverse justify-end sm:justify-start mt-6 -mb-1 sm:-mb-0 ml-6 sm:ml-0">
                            <div>
                                <p className="mb-1 sm:text-lg font-semibold leading-none text-[#ffffff]"> {eachItem.title}</p>
                                <p className="text-sm font-normal tracking-wider text-third">{eachItem.date}</p>
                            </div>
                            <p className="my-3 text-sm text-secondary/90 font-semibold sm:pr-4">{eachItem.shortDescription}</p>

                        </div>

                    </li>
                ))}

            </ol>

        </div>
    )
}

export default Progress
