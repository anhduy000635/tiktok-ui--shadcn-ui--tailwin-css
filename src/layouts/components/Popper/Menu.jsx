import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Menu({ items, onChange, currentUser }) {
    return (
        <DropdownMenu className="overflow-hidden">
            <DropdownMenuTrigger asChild className="outline-none">
                <div>
                    {currentUser ? (
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c0a37b06366155df0e944c6828998563.jpeg?lk3s=a5d48078&nonce=2465&refresh_token=16ec2831fa69aa7dc9628120b0309328&x-expires=1737792000&x-signature=5SRG1W74e7BvMDmrQUoo%2FwTMpGQ%3D&shp=a5d48078&shcp=81f88b70" />
                            <AvatarFallback>Duy Dang Ngu</AvatarFallback>
                        </Avatar>
                    ) : (
                        <Button variant="hidden" size="icon">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </Button>
                    )}
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                modal={false}
                side="bottom"
                align="end"
                className="w-56 max-w-56   pt-2 mt-2 max-h-60 scrollbar-thin overflow-y-auto bg-white shadow-lg rounded-xl p-2 border border-gray-200"
            >
                {items?.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        className="py-2 px-4  text-gray-900 font-medium hover:bg-gray-100 rounded-md cursor-pointer"
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
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onChange: PropTypes.func,
    currentUser: PropTypes.object,
};
export default Menu;
