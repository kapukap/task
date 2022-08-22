import React from 'react';
import classes from './Input.module.scss'
import radio from './Radio.module.scss'
import classnames from "classnames";
import Message from "../Message/Message";

const Input = ({type, label = 'Label', error = '', info = '', className, name, value = '', onChange = null, checkedValue = 0, onBlur}) => {
    let inputClass = classnames({
        [classes.input]: true,
        [classes['input--danger']]: error,
    })
    let labelClass = classnames({
        [classes.label]: true,
        [classes.filled]: value,
        [classes['label--danger']]: error
    })

    switch (type) {
        case 'radio':
            const isChecked = Number(value) === Number(checkedValue)

            return (
                <label className={radio.container}>{label}
                    <input type="radio" name={name} onChange={onChange} value={value} checked={isChecked}/>
                    <span className={radio.checkmark}/>
                </label>
            )
        default:
            return (
                <>
                    <div className={classnames({[classes.block]: true}, className)}>
                        <input className={inputClass} onChange={onChange} onBlur={onBlur} value={value} name={name}
                               id="normal-input" type="text"/>
                        <label className={labelClass} htmlFor="normal-input">{label}</label>
                        {(info && !error) && <Message type={'validationInfo'}>{info}</Message>}
                        {error && <Message type={'validationError'}>{error}</Message>}
                    </div>
                </>
            )
    }
};

export default Input;
