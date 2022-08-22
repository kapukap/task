import React from 'react';
import classes from './Message.module.scss'
import Heading from "../Heading/Heading";
import classnames from "classnames";
import Text from "../Text/Text";

const Message = ({children, type = 'requestError'}) => {
    let messageClass = classnames({
        [classes['message__validation']]: ['validationError', 'validationInfo', 'validationInlineError'].includes(type),
        [classes['message__validation--error']]: ['validationError', 'validationInlineError'].includes(type),
        [classes['message__validation--info']]: type === 'validationInfo',
        [classes['message__request--error']]: type === 'requestError'
    })


    switch (type) {
        case 'validationError':
            return  <Text className={messageClass}>{children}</Text>
        case 'validationInlineError':
            return  <span className={messageClass}>{children}</span>
        case 'validationInfo':
            return <Text className={messageClass}>{children}</Text>
        default: return <Heading className={messageClass}>{children}</Heading>
    }

};

export default Message;
