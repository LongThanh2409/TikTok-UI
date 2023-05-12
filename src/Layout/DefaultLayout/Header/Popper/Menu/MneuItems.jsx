import Button from "../../../Button/Button"
import PropTypes from 'prop-types'
import className from "classnames/bind"
import styles from "./Menu.module.scss"
const cx = className.bind(styles)

const MneuItems = ({ data, onClick }) => {
    return (


        <Button className={cx("items", { hr: data.hr })} to={data?.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
    )
}
MneuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}
export default MneuItems