import className from "classnames/bind"
import styles from "./Button.module.scss"
import { Link } from "react-router-dom"
const cx = className.bind(styles)

// eslint-disable-next-line react/prop-types
const Button = ({ to, href, primary, outline, text, small, lagre, children, onClick, leftIcon, className }) => {
    let Component = "button"
    const pops = {
        onClick,

    }
    if (to) {
        pops.to = to
        // eslint-disable-next-line no-undef
        Component = Link
    }
    else if (href) {
        pops.href = href
        Component = "a"
    }
    const classs = { primary, outline, small, lagre, text, [className]: className }
    return (
        <Component className={cx("wrapper", classs)} {...pops}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Component>
    )
}


export default Button