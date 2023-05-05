/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import className from "classnames/bind"
import styles from "./AcountItem.module.scss"

const cx = className.bind(styles)
// eslint-disable-next-line react/prop-types
const AcountItem = ({ data }) => {

    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx("AcountItem-wrapper")}>

                <img className={cx("avatar")} src={data.avatar} alt={data.avatar} />
                <div className={cx("info")}>

                    <h4 className={cx("name")}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />}

                    </h4>
                    <span className={cx("username")}>{data.nickname}</span>
                </div>
            </div>
        </Link >
    )
}

export default AcountItem