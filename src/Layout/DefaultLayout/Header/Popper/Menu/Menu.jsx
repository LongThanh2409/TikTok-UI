import PropTypes from 'prop-types'
import className from "classnames/bind"
import styles from "./Menu.module.scss"
import Tippy from '@tippyjs/react/headless'; // different import path!
import PoperWrapper from "../Popper"
import MneuItems from "./MneuItems";
import Header from "./Header";
import { useState } from "react";

const cx = className.bind(styles)

// eslint-disable-next-line react/prop-types
const Menu = ({ children, items = [], ...passProps }) => {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]


    const renderItems = () => {

        return current.data.map((item, index) => {
            const isParend = !!item.children


            return (
                <MneuItems key={index} data={item} onClick={() => {
                    if (isParend) {

                        setHistory(pre => [...pre, item.children])
                    }
                }
                } />
            )



        }

        )
    }

    return (
        <Tippy
            {...passProps}
            interactive
            delay={[0, 700]}
            offset={[10, 10]}
            placement='bottom-end'
            trigger="mouseenter"
            hideOnClick={false}
            render={attrs => (
                <div className={cx("content-menu")} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx("menu-poper")}>
                        {history.length > 1 && <Header title={current.title}
                            onBack={() => {
                                setHistory((pre) => pre.slice(0, pre.length - 1))
                            }}
                        />}
                        <div className={cx("menu-body")}> {renderItems()}</div>
                    </PoperWrapper>

                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}

        >

            {children}
        </Tippy >
    )
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array
}
export default Menu