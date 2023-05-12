import Header from "../DefaultLayout/Header/Header";

// eslint-disable-next-line react/prop-types
function HeaderLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderLayout;