import React, {useRef, useState} from "react";
import classes from "./Tooltip.module.scss";
import classnames from "classnames";
import {useOverflow} from "../../hooks/useOverflow/useOverflow";

const Tooltip = ({children, content, className}) => {
    const [active, setActive] = useState(false);
    const tooltipRef = useRef()
    const isOverflow = useOverflow(tooltipRef);

    let tooltipClass = classnames({
        [classes.tooltip]: true,
        [classes.tooltip__wrapper]: isOverflow
    }, className);

    return (
        <div
            className={tooltipClass}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            ref={tooltipRef}
        >
            {children}
            {isOverflow && active && (
                <div className={classes['tooltip--tip']}>{content}</div>
            )}
        </div>
    );
};

export default Tooltip;
