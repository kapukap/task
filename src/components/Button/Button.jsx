import React from 'react';
import classes from './Button.module.scss'
import classNames from 'classnames';

const Button = ({type = 'primary', className, children, onClick = null, buttonType = 'button'}) => {

    let btnClass = classNames({
        [classes.button]: true,
        [classes['button--disabled']]: type === 'disabled',
        [classes['button--primary']]: type === 'primary',
    }, className);

    switch (type) {
        case 'disabled':
            return <button type={buttonType}
                className={btnClass}
                onClick={onClick}>
                {children}
            </button>
        default:
            return <button type={buttonType}
                className={btnClass}
                onClick={onClick}>
                {children}
            </button>
    }
};

export default Button;
