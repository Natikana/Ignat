import React from 'react'
import classes from "./Message.module.css";

export type messageDataProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageDataProps) {
    return (
        <>
            <div className={classes.message}>
                <div className={classes.avatarContent}>
                    <img alt="avatar" width="50" height="50" className={classes.avatar} src={props.avatar}/>
                </div>
                <div className={classes.coner}></div>
                <div className={classes.content}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.ask}>
                        <div className={classes.note}>{props.message}</div>
                        <div className={classes.time}>{props.time}</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Message
