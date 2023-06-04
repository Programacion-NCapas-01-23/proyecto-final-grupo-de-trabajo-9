import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBox = () =>{
    return(
        <form className="flex flex-row items-center ">
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
				</div>
				<input type="text" class="bg-blue border text-white border-white-300 text-sm rounded-full block w-32 sm:w-72 md:11/12 pl-10 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white lg:w-96 " placeholder="Buscar..."/>
            </div>
        </form>
    );
}
export default SearchBox;   