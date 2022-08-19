import React from 'react';
import classes from './Container.module.scss'
import classnames from "classnames";

const Container = ({type, children}) => {
    let containerClass = classnames({
        [classes.container]: true,
        [classes['container--laptop']]: type === 'laptop',
        [classes['container--tablet']]: type === 'tablet',
        [classes['container--mobile']]: type === 'mobile',
    })

    switch (type) {
        case 'laptop':
            return <div className={containerClass}>{children}</div>
        default: return <div className={containerClass}>{children}</div>
    }
};

export default Container;
