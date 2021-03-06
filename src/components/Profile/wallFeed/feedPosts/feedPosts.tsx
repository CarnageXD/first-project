import circleAvatar from './../../../../img/van-avatar.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import s from './feedPosts.module.css'
import { FC } from 'react';

interface FeedPostsPropsInterface {
    message: string,
}

const FeedPosts: FC<FeedPostsPropsInterface> = (props) => {
    return (
        <div className={s.feedPost}>
            <div className={s.postAvatar}>
                <img className={s.circleAvatar} src={circleAvatar} alt='userAvatar'></img>
            </div>
            <div className={s.postText}>{props.message}</div>
            <div className={s.postReaction}>
                <FontAwesomeIcon className={s.comment} icon={faComment} />
                <FontAwesomeIcon className={s.heart} icon={faHeart} />
            </div>
        </div>
    )
}

export default FeedPosts