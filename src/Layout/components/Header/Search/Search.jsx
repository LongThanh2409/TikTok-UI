import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faMagnifyingGlass,

} from "@fortawesome/free-solid-svg-icons"
import HeadTippy from '@tippyjs/react/headless';
import PoperWrapper from "../../../DefaultLayout/Header/Popper/Popper"
import AcountItem from '../../../DefaultLayout/AcountItem/AcountItem';
import { useDebounced } from '../../../../hook/useDebounced';
import className from "classnames/bind"
import styles from "./Search.module.scss"
import { Loading } from '../../../../components/Icons';
import { GetSearch } from '../../../../Api/Search/search';

const cx = className.bind(styles);
const Search = () => {

    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const debounced = useDebounced(searchValue, 500)
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)
        //c1
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())


        //c2
        // GetSearch(debounced)
        //     .then(({ data: { data } }) => {
        //         setSearchResult(data);

        //         setLoading(false)

        //     })
        //     .catch(() =>
        //         setLoading(false)
        //     )
        //c3 
        const fetchGet = async () => {
            const { data: { data } } = await GetSearch(debounced)
            try {
                setSearchResult(data);

                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchGet()
    }, [debounced])
    const hanldOutsie = () => {
        setShowResult(false)
    }
    return (
        // the div cho Tippy 
        <div>
            <HeadTippy
                appendTo={() => document.body}//
                interactive
                visible={showResult && searchResult.length > 0}
                placement='top-start'
                render={attrs => (
                    <div className={cx("box-search-result")} tabIndex="-1" {...attrs}>

                        <PoperWrapper>
                            <h1 className={cx("acount")}>Acount</h1>
                            {searchResult.map((result) =>
                                <AcountItem key={result.id} data={result} />
                            )}


                        </PoperWrapper>
                    </div>
                )}
                onClickOutside={hanldOutsie}
            >


                <div className={cx("input_tag", " relative flex w-[415px] h-[46px]  bg-[#1618230F] rounded-3xl pl-4 ")}>
                    <input className={cx("input", ' caret-pink-500 bg-transparent outline-none h-full  flex-1 py-3 ')}
                        ref={inputRef}
                        value={searchValue}
                        onChange={((e) => setSearchValue(e.target.value))}
                        type="text" name="" id="" placeholder="Tìm kiếm " spellCheck={false}
                        onFocus={() => {
                            setShowResult(true);

                        }}
                    />


                    {!!searchValue && !loading && (
                        <button className={cx("clears", 'absolute right-[60px] top-1/2 translate-y-[-50%]')} onClick={() => {
                            setSearchValue("");
                            inputRef.current.focus();
                            setShowResult(false);
                        }}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Loading */}

                    {loading && <Loading className={cx("loading", ' absolute right-[60px] top-1/2 translate-y-[-50%]')} />}


                    <button className={cx("search", "text-gray-400 border-l-2  w-[52px] h-full hover:bg-[rgba(11,13,20,0.06)] active:bg-gray-200  rounded-r-3xl")} >
                        {/* search */}
                        <FontAwesomeIcon className={cx(' mt-1 text-xl ', 'icon_search')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadTippy>
        </div>
    )
}

export default Search
