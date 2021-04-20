import { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = (props) => {
    const [choosePageMode, setChoosePageMode] = useState(false)
    const [inputPage, setInputPage] = useState()
    let [portionNumber, setPortionNumber] = useState(1)

    let pages = []

    const portionSize = 5;
    let leftPortionElement = (portionNumber - 1) * portionSize + 1;
    let rightPortionElement = portionNumber * portionSize;

    let pagesCount = Math.ceil(props.totalUsersCount / portionSize)

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.pagesWrapper}>
            <span onClick={() => setPortionNumber(--portionNumber)}
                className={`${s.paginationButton} ${s.paginationLeftButton}`} >{
                    portionNumber === 1 ? null : '<'}</span>
            {portionNumber === 1 ?
                null
                :
                <span onClick={() => {
                    props.onPageChanged(pages[0])
                    setPortionNumber(1)
                }}
                    className={`${props.currentPage === pages[0] && s.selectedPage} ${s.pageNumber}`}>{pages[0]}
                </span>
            }

            {
                pages.filter(p => p >= leftPortionElement && p <= rightPortionElement).map(p =>
                    <span onClick={() => props.onPageChanged(p)}
                        className={`${props.currentPage == p && s.selectedPage} ${s.pageNumber}`}>
                        {p}
                    </span>)
            }

            <span onDoubleClick={() => setChoosePageMode(!choosePageMode)}>
                {
                    choosePageMode
                        ? <input className={s.choosePageInput} onBlur={() => {
                            setChoosePageMode(!choosePageMode)
                            setPortionNumber(inputPage / portionSize)
                            props.onPageChanged(inputPage)
                        }
                        }
                            onChange={(e) => setInputPage(e.currentTarget.value)} autoFocus={true}></input>
                        :
                        <span className={s.pageNumber}>...</span>
                }
            </span>


            <span onClick={() => {
                props.onPageChanged(pages[pages.length - 1])
                setPortionNumber((pagesCount - 1) / portionSize)
            }}
                className={`${props.currentPage === pages[pages.length - 1] && s.selectedPage} ${s.pageNumber}`}>
                {pages[pages.length - 1]}</span>

            <span onClick={() => setPortionNumber(++portionNumber)}
                className={`${s.paginationButton} ${s.paginationRightButton}`}>{
                    portionNumber === Math.round(pagesCount / 5) ? null : '>'}</span>
        </div>
    )

}

export default Paginator