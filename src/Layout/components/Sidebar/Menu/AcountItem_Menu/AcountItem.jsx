import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import Tippy from '@tippyjs/react/headless'
import PoperWrapper from "../../../../DefaultLayout/Header/Popper/Popper"

import className from "classnames/bind"
import styles from "./AcountItem_Menu.module.scss"
import Image from '../../../../../components/Image/Image'
import Button from '../../../../DefaultLayout/Button/Button'
const cx = className.bind(styles)
const AcountItem = ({ data }) => {
    const renderPopper = (attrs) => {
        return <>
            <div className={cx("content-menu")} tabIndex="-1" {...attrs}>
                <PoperWrapper className={cx("Account_Tippy")}>
                    <div className={cx('Account_avatar__button')}>
                        <div className={cx("Acount_Item__avatar__Tippy")}>
                            <Image className={cx("avatar")} src={""} />
                        </div>
                        <Button primary className={cx("button")}>Follow</Button>
                    </div>
                    <div className={cx("info_Tippy")} >
                        <div className={cx("Acount_Item__info_Tippy")}>
                            <h4 className={cx("Acount_Item__name_Tippy")}>đothànhlong</h4>
                            {<FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />}
                        </div>
                        <span className={cx("Acount_Item__username_Tippy")}>Lòm</span>
                    </div>
                    <p className='flex space-x-3 mt-2'>
                        <strong>9.1M</strong>
                        <span>Following</span>
                        <strong>1.2M</strong>
                        <span>Thích</span>
                    </p>
                </PoperWrapper>
            </div>
        </>
    }
    return <>


        <Tippy
            appendTo={() => document.body}
            interactive={true}
            placement='bottom'
            offset={[40, 0]}
            delay={[800, 0]}
            render={renderPopper}
        >
            <li  >
                <div className={cx("Acount_Item")}>
                    <div className={cx("Acount_Item__avatar")}>
                        <Image className={cx("avatar")} src={""} />
                    </div>
                    <div className={cx("info")} >
                        <div className={cx("Acount_Item__info")}>
                            <h4 className={cx("Acount_Item__name")}>đothànhlong</h4>
                            {<FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />}
                        </div>
                        <span className={cx("Acount_Item__username")}>Lòm</span>
                    </div>

                </div>
            </li>

        </Tippy>
    </>
}
AcountItem.propType = {
    data: PropTypes.object.isRequired
}
export default AcountItem