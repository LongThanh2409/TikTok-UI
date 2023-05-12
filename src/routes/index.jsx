//routes/config
import routesConfig from "../Config/routes"
//Layout
import HeaderOnly from "../Layout/HeaderOnly/HeaderOnly"
//Page
import HomePage from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import Search from "../pages/Search"
import Profile from "../pages/Profile"
import Live from "../pages/Live"
//publicRouter
const publicRoute = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
]

export { publicRoute }