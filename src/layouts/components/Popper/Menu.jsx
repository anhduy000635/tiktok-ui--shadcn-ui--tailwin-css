import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

function Menu({ items = [], onChange, currentUser }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <Link to={item.to} key={index}>
                    <MenuItem
                        data={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                </Link>
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderResult = (attrs) => (
        <div className="w-[224px] pt-2" tabIndex="-1" {...attrs}>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className="overflow-y-auto">{renderItems()}</div>
        </div>
    );

    return (
        <DropdownMenu className="overflow-hidden">
            <DropdownMenuTrigger asChild className="outline-none  px-3">
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
                asChild
                modal={undefined}
                side="bottom"
                align="end"
                className="w-[216px] max-w-56  pt-2 h-full  max-h-80 scrollbar-thin overflow-y-auto bg-white shadow-lg rounded-xl  border border-gray-200 "
            >
                {renderResult()}
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
