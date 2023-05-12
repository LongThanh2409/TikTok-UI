import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import className from "classnames/bind"
import styles from "./Menu.module.scss"
const cx = className.bind(styles)
const MenuIteam = ({ title, icon, to }) => {
    return <>
        <NavLink className={(nav) => cx("menu-item", { active: nav.isActive })} to={to}>

            <div >
                {icon}
            </div>
            <span className={cx("title")}>{title}</span>

        </NavLink >
    </>
}
MenuIteam.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    to: PropTypes.string
}
export default MenuIteam