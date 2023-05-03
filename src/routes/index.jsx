import HomePage from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import HeaderOnly from ".././components/Layout/HeaderOnly/index"
import Search from "../pages/Search"
//publicRouter
const publicRoute = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]

export { publicRoute }