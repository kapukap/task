import React from 'react';
import classes from './Textarea.module.scss'
import Text from "../Text/Text";
import classnames from "classnames";


const Textarea = ({placeholder = 'Upload your photo', error = '', onChange, fileName = ''}) => {
    let messageClass = classnames({
        [classes.file__message]: true,
        [classes['file__message--danger']]: error
    })

    let buttonClass = classnames({
        [classes.file__button]: true,
        [classes['file__button--danger']]: error
    })

    let fileClass = classnames({
        [classes.file__name]: true,
        [classes['file__name--danger']]: error
    })

    return (
        <div className={classes.file}>
            <input className={classes.file__input} type="file" name="file" id="file" onChange={onChange}/>
            <label className={classes.file__label} htmlFor="file">
                <span className={buttonClass}>Upload</span>
                <textarea className={fileClass} placeholder={placeholder} rows="1" readOnly={true} defaultValue={fileName}/>
            </label>
            {error && <Text className={messageClass}>{error}</Text>}
        </div>
    )
};

export default Textarea;
