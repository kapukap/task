import React from 'react';
import classes from './BG.module.scss'

const BG = ({variant, children}) => {
    switch (variant) {
        case 'primary':
            return <div className={classes.yellow}>{children}</div>
        case 'secondary':
            return <div className={classes.blue}>{children}</div>
        case 'background':
            return <div className={classes.lightGrey}>{children}</div>
        default: return <div className={classes.yellow}>{children}</div>
    }
};

export default BG;
