import React from 'react';
import classes from "./Tooltip.module.scss";

const Tooltip = ({name, text = 'some text'}) => {
    return (
        <div className={classes.tooltip}>{name}
            <span className={classes.tooltipText}>{text}</span>
        </div>
    )
};

export default Tooltip;
