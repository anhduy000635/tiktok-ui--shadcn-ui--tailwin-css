import { Link } from "react-router-dom";
import routesConfig from "/src/config/routes";
import Search from "../Search/Search"
import Menu from "../Sidebar/Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
    // const curentUser = false;

    // //handle logic
    // const handleMenuChange = (menuItem) => {
    //     switch (menuItem.type) {
    //         case 'language':
    //             //handle change language
    //             break;
    //         default:
    //     }
    // }
    // const userMenu = [
    //     {
    //         icon: <FontAwesomeIcon icon={faUser} />,
    //         title: 'View profile',
    //         to: '/@duydangngu',
    //     },
    //     {
    //         icon: <FontAwesomeIcon icon={faCoins} />,
    //         title: 'Get coins',
    //         to: '/coin',
    //     },
    //     {
    //         icon: <FontAwesomeIcon icon={faGear} />,
    //         title: 'Settings',
    //         to: '/settings',
    //         separator: true,
    //     },
    //     ...MENU_ITEMS,
    //     {
    //         icon: <FontAwesomeIcon icon={faSignOut} />,
    //         title: 'Log out',
    //         to: '/logout',
    //         separate: true,
    //     }
    // ]
    return (
        <header className="flex w-2\/3 h-14 shadow-[0px_1px_1px_rgba(0,0,0,0.12)]  fixed  right-0 z-10 w-full bg-white  justify-center  ">
            <div className="h-full flex justify-between p-0 w-[1150px] items-center ">
                <div className="">
                    <Link className="cursor-pointer" to={routesConfig.home}><img src="/src/assets/images/logo.svg" /></Link>
                </div>
                <div >
                    <Search />
                </div>
                <div>
                    <Menu>
                        {/* <img src="/src/assets/images/noImage.png" alt="" /> */}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;