import React from 'react';
import classes from './Image.module.scss'
import classnames from "classnames";

const Image = ({src, type, alt = '#', className}) => {
    let containerClass = classnames({[classes.imageContainer]: true}, className);
    let imageClass = classnames({[classes.image]: true, [classes['image--rounded']]: type === 'avatar'});

    return (
        <div className={containerClass}>
            <img className={imageClass} src={src} alt={alt}/>
        </div>
    )
};

export default Image;
