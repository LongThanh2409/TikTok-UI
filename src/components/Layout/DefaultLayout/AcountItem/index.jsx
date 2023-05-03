import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import className from "classnames/bind"
import styles from "./AcountItem.module.scss"
const cx = className.bind(styles)
const AcountItem = () => {
    return (
        <div className={cx("AcountItem-wrapper")}>
            <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1682784000&x-signature=NV8%2BLwqYC9AOcfndGE0INgfCgvQ%3D" alt="" />
            <div className={cx("info")}>

                <h4 className={cx("name")}>
                    <span>Đỗ Thành Long</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </h4>
                <span className={cx("username")}> Bố long đến đây</span>
            </div>
        </div>
    )
}

export default AcountItem