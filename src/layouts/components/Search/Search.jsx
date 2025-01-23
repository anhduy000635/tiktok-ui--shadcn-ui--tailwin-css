import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "../../../Icons/icon";
import { useState } from "react";

function Search() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`flex relative w-[361px] h-[44px] bg-[rgba(22,24,35,0.06)] 
            rounded-3xl border-[1px] pl-4 
            ${isFocused ? "border-[rgba(22,24,35,0.75)]" : "border-transparent"}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={-1} // Để container nhận sự kiện focus
        >
            <input
                placeholder="Search accounts and videos"
                className="pr-10 h-full text-black text-lg bg-transparent flex-1 caret-primaryButton font-proxima outline-none placeholder-shown:peer"
                type="text"
            />
            <div className="flex items-center h-full">
                <span className="w-px h-[28px] bg-gray-300 mx-auto"></span>
            </div>
            {/* Clear button */}
            <button
                className={`absolute right-[calc(58px+16px)] top-1/2 transform -translate-y-1/2 
                ${isFocused ? "text-[rgba(22,24,35,0.75)]" : "text-[rgba(22,24,35,0.34)]"}`}
            >
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* Spinner Icon */}
            <FontAwesomeIcon
                icon={faSpinner}
                className="absolute right-[calc(58px+16px)] top-1/2 transform -translate-y-1/2 text-[rgba(22,24,35,0.06)]"
            />
            {/* Search button */}
            <button
                className={`w-[52px] h-full flex items-center justify-center rounded-r-3xl 
                ${isFocused ? "text-[rgba(22,24,35,0.75)]" : "text-[rgba(22,24,35,0.34)]"} 
                hover:cursor-pointer hover:bg-[rgba(22,24,35,0.03)] active:bg-[rgba(22,24,35,0.06)]`}
            >
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;