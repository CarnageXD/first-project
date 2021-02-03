import Chats from './Chats/Chats'
import s from './Dialogs.module.css'
import ChatMessage from './ChatMessage/ChatMessage'
import React from "react"


const Dialogs = (props) => {
    let state = props.dialogsPage

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.handleKeyPress()
        }
    }

    const updateMessageText = (e) => {
        let text = e.target.value
        props.updateMessageText(text)
    }

    let chatElements =
        state.chatData.map(chat => <Chats id={chat.id} avatar={chat.avatar} name={chat.name} lastMessage={chat.lastMessage} />)
    let messagesElements =
        state.messagesData.map(message => <ChatMessage message={message.message} avatar={message.avatar} messageTime={message.messageTime} />)


    return (
        <div className={s.dialogWrapper}>
            <div className={s.selectChat}>
                {chatElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesContainer}>
                    {messagesElements}
                    <div className={s.chatBlock}>
                        <input onChange={updateMessageText} onKeyPress={handleKeyPress} placeholder='Enter a text to send...' className={s.chatInput} type='text' value={state.newMessage.message}></input>
                    </div>
                </div>
            </div>
            {/* <div className={s.emptyChatMessage}>Select a chat to start messaging...</div> */}
        </div >
    )
}


export default Dialogs