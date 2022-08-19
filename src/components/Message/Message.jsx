import React from 'react';
import classes from './Message.module.scss'
import Heading from "../Heading/Heading";
import classnames from "classnames";

const Message = ({children}) => {
    let messageClass = classnames({
        [classes.message]: true,
        [classes['message--danger']]: true,
    })

    return <Heading className={messageClass}>{children}</Heading>
};

export default Message;
