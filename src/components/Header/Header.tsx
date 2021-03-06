import { FC, useState } from 'react'
import circleAvatar from './../../img/van-avatar.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

interface HeaderPropsInterface {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
}

const Header: FC<HeaderPropsInterface> = (props) => {
    const [triangle, setTriangle] = useState(false)
    return (
        <header className={s.header}>
            <NavLink to='/profile'><div className={s.logo}>D U N G E O N</div></NavLink>
            <div className={s.userMenu}>
                {props.isAuth
                    ?
                    <>
                        <div className={s.userName}>{props.login}</div>
                        <div className={s.userAvatar}>
                            <img className={s.circleAvatar} src={circleAvatar} alt='userAvatar'></img>
                        </div>
                        <div onClick={() => setTriangle((prev) => !prev)}
                            className={s.userTriangle}><FontAwesomeIcon icon={faCaretDown} /></div>
                        {triangle
                            ?
                            <ul onBlur={() => setTriangle(false)} className={s.dropdownMenu}>
                                <li onClick={() => setTriangle((prev) => !prev)}>
                                    <NavLink to='/settings'>Account Settings</NavLink></li>
                                <li onClick={() => {
                                    setTriangle((prev) => !prev)
                                    props.logout()
                                }
                                }>Logout</li>
                            </ul>
                            :
                            null
                        }

                    </>
                    :
                    <NavLink to='/login'>Sign In</NavLink>}

                {/* <div className={s.userName}>{props.userName}</div>
                <div className={s.userAvatar}>
                    <img className={s.circleAvatar} src={circleAvatar}></img>
                </div>
                <div className={s.userTriangle}><FontAwesomeIcon icon={faCaretDown} />
                </div> */}
            </div>
        </header>
    )
}

export default Header