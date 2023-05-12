
import Header from "./Header/Header";
import Slidebar from "../components/Sidebar/Sidebar";
import PropTypes from 'prop-types'
import className from "classnames/bind"
import styles from "./DefaultLayout.module.scss"
const cx = className.bind(styles)
// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (

        <div className="flex flex-col items-center ">
            <Header />
            <div className={cx("container", " w-[1400px] flex")}>
                <Slidebar />
                <div className=" content flex-1 text-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
DefaultLayout.propTypes = { children: PropTypes.node.isRequired }
export default DefaultLayout