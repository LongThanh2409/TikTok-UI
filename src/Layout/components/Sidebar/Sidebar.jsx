import { useState } from "react"
import routesConfig from "../../../Config/routes"
import { Home_Icon, Live_Icon, User_Icon } from "../../../components/Icons"
import AcountItem from "./Menu/AcountItem_Menu/AcountItem"
import AcountItem_Menu from "./Menu/AcountItem_Menu/AcountItem_Menu"
import Menu from "./Menu/Menu"
import MenuIteam from "./Menu/MenuIteam"



const Slidebar = () => {
    const [acountItemMenu, setAcountItemMenu] = useState([])

    return (
        <aside className="w-[240px] ">
            <Menu>
                <MenuIteam title={"Dành cho bạn"} to={routesConfig.home} icon={<Home_Icon />} />
                <MenuIteam title={"Đang Follow"} to={routesConfig.following} icon={<User_Icon />} />
                <MenuIteam title={"LIVE"} to={routesConfig.live} icon={<Live_Icon />} />

            </Menu>

            <AcountItem_Menu>
                <AcountItem />
                <AcountItem />
                <AcountItem />
            </AcountItem_Menu>

            <AcountItem_Menu>
                <AcountItem />
                <AcountItem />
                <AcountItem />
            </AcountItem_Menu>

        </aside>
    )
}

export default Slidebar