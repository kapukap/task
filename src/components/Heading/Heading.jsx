import React from 'react';
import classnames from 'classnames'
import classes from "./Heading.module.scss";

const Heading = ({children, className}) => {
    let headingClass = classnames({[classes.heading]: true}, className)

    return <h1 className={headingClass}>{children}</h1>
};

export default Heading;
