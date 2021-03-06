import s from './User.module.css'
import circleAvatar1 from './../../../img/gridPhoto1.png'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

type PropsType = {
    userID: number,
    followed: boolean,
    isFollowingProgress: number[],
    followUser: (userID: number, followed: boolean) => void,
    unFollowUser: (userID: number, followed: boolean) => void,
    name: string,
    userAvatar: string | null,
}

const User: FC<PropsType> = (props) => {
    return (
        <div className={s.friendContainer}>
            <div className={s.user}>
                <div className={s.aboutUser}>
                    <div className={s.userAvatar}>
                        <NavLink to={`/profile/${props.userID}`}>
                            <img className={s.circleAvatar} src={props.userAvatar || circleAvatar1} alt='userAvatar'></img>
                        </NavLink>
                    </div>
                    <div className={s.userInfo}>
                        <NavLink
                            className={s.userNavLink} to={`/profile/${props.userID}`}><div className={s.userName}>{props.name}</div>
                        </NavLink>
                        <div className={s.userCity}>{'USA, FL, Miami'}</div>
                        {/* <div className={s.userCity}>{props.location.country}, {props.location.state}, {props.location.city}</div> */}
                    </div>
                </div>
                <div className={s.sendMessageUser}>
                    <button className={s.sendMessageButton}>Send message</button>
                </div>
            </div>
            <div className={s.userStatus}>
                <div className={s.onlineStatus}>{'online'}</div>
                {/* <div className={s.onlineStatus}>{props.status}</div> */}
                <div className={s.followStatus}>
                    {props.followed ?
                        <button disabled={props.isFollowingProgress.some(id => id === props.userID)} className={s.followButton} onClick={() => {
                            props.unFollowUser(props.userID, props.followed)
                        }}>Unfollow</button> :
                        <button disabled={props.isFollowingProgress.some(id => id === props.userID)} className={s.followButton} onClick={() => {
                            props.followUser(props.userID, props.followed)
                        }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}


export default User