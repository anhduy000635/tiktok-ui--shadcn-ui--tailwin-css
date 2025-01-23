import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';




function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className="" to={to}>
            <span className="">{icon}</span>
            <span className="">{activeIcon}</span>
            <span className="">{title}</span>

        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired
}
export default MenuItem;