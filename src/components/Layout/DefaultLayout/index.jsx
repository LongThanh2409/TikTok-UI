
import Header from "./Header";
import Slidebar from "./Sidebar";


// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (

        <div className="flex flex-col items-center ">
            <Header />
            <div className="container w-[1400px] flex">
                <Slidebar />
                <div className="content flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout