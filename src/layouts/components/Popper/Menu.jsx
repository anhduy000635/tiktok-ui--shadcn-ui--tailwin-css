import PropTypes from 'prop-types'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Menu({ items, onChange }) {

    return (
        <DropdownMenu className="overflow-hidden">
            <DropdownMenuTrigger className="outline-none">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c0a37b06366155df0e944c6828998563.jpeg" />
                    <AvatarFallback>Duy Dang Ngu</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-56 max-w-56 max-h-60 scrollbar-thin overflow-y-auto bg-white shadow-lg rounded-xl p-2 border border-gray-200"
            >
                {items?.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        className="py-2 px-4 text-gray-900 font-medium hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => onChange?.(item)}
                    >
                        {item.icon} {item.title}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func,
};
export default Menu;
