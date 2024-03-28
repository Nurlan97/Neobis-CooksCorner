import { ROUTES } from '../../../config/pages-url.config' 
import { MdCottage } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

export const MENU = [
    {
        
        icon: MdCottage,
        link: ROUTES.HOME,
        
    },
    {
       
        icon: IoIosSearch,
        link: ROUTES.SEARCH,

    },
    {
       
        icon: FaRegUserCircle,
        link: ROUTES.PROFILE,

    },
   
]

export const LOGOUT = [
    {
        icon: MdOutlineLogout,
        link: ROUTES.LOGIN,

    }
]