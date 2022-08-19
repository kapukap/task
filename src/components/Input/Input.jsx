import React from 'react';
import classes from './Input.module.scss'
import radio from './Radio.module.scss'
import Text from "../Text/Text";
import classnames from "classnames";

const Input = ({type, label = 'Label', error = '', info = '', className, name, value = '', onChange = null, checkedValue = 0}) => {
    let inputClass = classnames({
        [classes.input]: true,
        [classes['input--danger']]: error,
    })
    let labelClass = classnames({
        [classes.label]: true,
        [classes.filled]: value,
        [classes['label--danger']]: error
    })
    let messageClass = classnames({
        [classes.message]: true,
        [classes['message--danger']]: error,
        [classes['message--info']]: info
    })

    switch (type) {
        case 'radio':
            const isChecked = Number(value) === Number(checkedValue)

            return (
                <label className={radio.container}>{label}
                    <input type="radio" name={name} onChange={onChange} defaultValue={value} checked={isChecked}/>
                    <span className={radio.checkmark}></span>
                </label>
            )
        default:
            return (
                <>
                    <div className={classnames({[classes.block]: true}, className)}>
                        <input className={inputClass} onChange={onChange} defaultValue={value} name={name} id="normal-input" type="text"/>
                        <label className={labelClass} htmlFor="normal-input">{label}</label>
                        {(info && !error) && <Text className={messageClass}>{info}</Text>}
                        {error && <Text className={messageClass}>{error}</Text>}
                    </div>
                </>
            )
    }
};

export default Input;
