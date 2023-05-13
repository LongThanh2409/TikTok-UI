import PropTypes from 'prop-types'
import className from "classnames/bind"
import styles from "./AcountItem_Menu.module.scss"
const cx = className.bind(styles)

const AcountItem_Menu = ({ children }) => {
    return (
        <ul className={cx("Acount_Item_Menu")}>
            <h2 className={cx("title_account")}>Tài khoản được đề xuất</h2>
            {children}
            <p className={cx("see-all")}>Xem tất cả</p>
        </ul>
    )
}
AcountItem_Menu.propTypes = { children: PropTypes.node.isRequired }
export default AcountItem_Menu