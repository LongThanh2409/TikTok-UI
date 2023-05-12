
import PropTypes from 'prop-types'
import className from "classnames/bind"
import styles from "./Menu.module.scss"
const cx = className.bind(styles)
const Menu = ({ children }) => {
    return (
        <nav className={cx("nav-item")}>
            {children}
        </nav>
    )
}
Menu.propTypes = { children: PropTypes.node.isRequired }
export default Menu