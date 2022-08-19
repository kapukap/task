import React from 'react';
import classes from "./Text.module.scss";
import classnames from "classnames";

const Text = ({type, children, className}) => {
    let textClass = classnames({
        [classes.text]: true,
        [classes['text--elipsis']]: type === 'cover'
    }, className);

    return <p className={textClass}>{children}</p>
};

export default Text;
