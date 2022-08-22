import React, {useRef} from 'react';
import classes from './Textarea.module.scss'
import classnames from "classnames";
import Message from "../Message/Message";

const Textarea = ({placeholder = 'Upload your photo', error = '', onChange, fileName = ''}) => {
    const inputRef = useRef(null);

    const changeHandler = (e) => {
        onChange(e)
        inputRef.current.value = null;
    };

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
            <input className={classes.file__input} type="file" id="file" onChange={changeHandler} ref={inputRef}/>
            <label className={classes.file__label} htmlFor="file">
                <span className={buttonClass}>Upload</span>
                <textarea className={fileClass} placeholder={placeholder} rows="1" readOnly={true} value={fileName}/>
            </label>
            {error && <Message type={'validationError'}>{error}</Message>}
        </div>
    )
};

export default Textarea;
