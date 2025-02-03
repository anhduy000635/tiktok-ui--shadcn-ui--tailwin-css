import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function MenuItem({ data, onClick }) {
    const classes = clsx(
        'menu-item w-full flex justify-start rounded-none h-[44px] text-base p-2  py-[11px] leading-[1.8rem] font-semibold  hover:!bg-[rgba(22,24,35,0.03)] ',
        {
            'border-t border-[rgba(22,24,35,0.12)]': data.separate, // Chỉ thêm border nếu `data.separate` là true
        },
    );
    return (
        <DropdownMenuItem className={classes} onClick={onClick}>
            {data.icon}
            {data.title}
        </DropdownMenuItem>
    );
}
MenuItem.propTypes = {
    data: PropTypes.shape({
        icon: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
        separate: PropTypes.bool,
    }).isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
