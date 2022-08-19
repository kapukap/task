import React from 'react';
import classes from './Button.module.scss'
import classNames from 'classnames';

const Button = ({type = 'primary', className, children, onClick, buttonType = 'button'}) => {
    let btnClass = classNames({
        [classes.button]: true,
        [classes['button--disabled']]: type === 'disabled',
        [classes['button--primary']]: type === 'primary',
    }, className);

    return (
        <button type={buttonType}
                className={btnClass}
                onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
