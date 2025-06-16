import { BsFillCircleFill } from "react-icons/bs"
import { Link } from "react-scroll"
import { v4 as uuidv4 } from 'uuid';
import { items } from "../data/navData";

const DotNav = () => {

    return (
        <div className="hidden top-[50%] fixed translate-y-[-50%] right-0 mr-20 xl:flex flex-col gap-4 z-50">
            {items.map(({ item, offset }) => (
                <Link activeClass="text-[#ABDF12] scale-150" spy={true} offset={offset} key={uuidv4()} to={item} smooth duration={500} className="cursor-pointer text-third duration-300 hover:text-primary hover:scale-150">
                    <BsFillCircleFill key={uuidv4()} size={10} />
                </Link>
            ))}
        </div>
    )
}

export default DotNav
