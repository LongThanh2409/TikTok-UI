
import className from "classnames/bind"
import styles from "./Menu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"


const cx = className.bind(styles)

// eslint-disable-next-line react/prop-types
const Header = ({ title, onBack }) => {

    return (
        <header className={cx("header")}>
            <button onClick={onBack} className={cx("btn-back")}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    )
}

export default Header