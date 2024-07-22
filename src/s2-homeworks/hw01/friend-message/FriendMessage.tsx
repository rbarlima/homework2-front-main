import React from 'react'
import s from './FriendMessage.module.css'
import avatar from './avatar.png'

// создать тип вместо any и отобразить приходящие данные
export type FriendMessagePropsType = {
    message : {
        id : number,
        user : {
            avatar : typeof avatar,
            name : string
        },
        message : {
            text : string,
            time : string
        }
    }
}

const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    alt = 'FriendAvatar'
                    src = {props.message.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <div>{props.message.message.text}</div>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <span>{props.message.message.time}</span>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
