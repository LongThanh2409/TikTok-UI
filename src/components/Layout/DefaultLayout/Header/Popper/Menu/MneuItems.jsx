import Button from "../../../Button"

import className from "classnames/bind"
import styles from "./Menu.module.scss"
const cx = className.bind(styles)
// eslint-disable-next-line react/prop-types
const MneuItems = ({ data, onClick }) => {
    return (

        // eslint-disable-next-line react/prop-types
        <Button className={cx("items", { hr: data.hr })} to={data?.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
    )
}

export default MneuItems