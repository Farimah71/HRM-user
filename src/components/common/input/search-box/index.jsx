import {Input, Button} from "../../.."
// ++++++++++ images import ++++++++++
import NextArrowIcon from "../../../../assets/images/next-arrow.png";
import SearchIcon from "../../../../assets/images/search.png";

export const SearchBox = ({ placeholder, classes }) => {

    // ---------- render jsx ----------
    return (
        <div className={`relative h-12 flex items-center ${ classes }`}>
            <img src={SearchIcon} alt="search" className="absolute left-2 top-1/2 -translate-y-1/2"/>
            <Input placeholder={placeholder} classes="rounded-48 h-full pl-12 py-3"/>
            <Button theme="light" classes="absolute right-0 top-0 !w-20 h-full border-none rounded-48 shadow-custom-orange-light flex items-center justify-center" icon={NextArrowIcon}/>
            {/* <div className="absolute right-0 top-0 h-full bg-white rounded-48 w-20 flex items-center justify-center shadow-custom-orange-light cursor-pointer">
                <img src={NextArrowIcon} alt="next-arrow" className="w-auto"/>
            </div> */}
        </div>
    )
}