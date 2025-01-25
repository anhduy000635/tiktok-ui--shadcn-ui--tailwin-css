import { Link } from "react-router-dom";
import routesConfig from "/src/config/routes";
import Search from "../Search/Search"
import Menu from "../Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icons/icon";
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoinSign, faEarthAsia, faEllipsisVertical, faGear, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },

            ],
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@duydangngu',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
            separator: true,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        }
    ]
    return (
        <header className="flex w-2\/3 h-14 shadow-[0px_1px_1px_rgba(0,0,0,0.12)]   fixed  right-0 z-10 w-full bg-white  justify-center  ">
            <div className="h-full flex justify-between pr-6 pl-6 p-0 w-[1150px] items-center ">
                <div className="">
                    <Link className="cursor-pointer" to={routesConfig.home}><img src="/src/assets/images/logo.svg" /></Link>
                </div>

                <Search />
                <div className="flex items-center">
                    {currentUser ? (
                        <div className="flex items-center ml-0">
                            <span className="bg-transparent text-4xl text-[#161823] py-1 px-3 cursor-pointer   " ><UploadIcon /></span>
                            <span className="bg-transparent text-4xl text-[#161823] py-1 px-3 cursor-pointer   " ><MessageIcon /></span>
                            <span className="bg-transparent text-4xl text-[#161823] py-1 px-3 cursor-pointer   " ><InboxIcon /></span>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            <Button variant="link" className="font-semibold " >
                                <Link to={routesConfig.upload}>Upload</Link>
                            </Button>
                            <Button
                                className=" ml-2 py-2 px-4  text-white
                                min-w-[100px]
                              bg-primaryButton border-current
                                rounded-[4px] shadow-lg border-solid-2
                                transparent
                                hover:bg-[rgba(254, 44, 85, 0.06)] hover:border-primaryButton">
                                <Link to={routesConfig.following}>Login</Link>
                            </Button>
                        </div>
                    )}
                    <Menu

                        items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>

                        {currentUser ? (
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/src/assets/images/noImage.png" />
                                <AvatarFallback>Duy Dang Ngu</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Button >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Button>
                        )}

                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;