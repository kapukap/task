import React from 'react';
import classes from './Card.module.scss'
import Image from "../Image/Image";
import Tooltip from "../Tooltip/Tooltip";

const Card = ({name, imgLink, post, email, phone}) => {
    return (
        <div className={classes.card}>
            <Image type={'avatar'} className={classes.card__image} src={imgLink} alt={'avatar'}/>
            <Tooltip className={classes.card__name} content={name}>{name}</Tooltip>
            <Tooltip className={classes.card__post} content={post}>{post}</Tooltip>
            <Tooltip className={classes.card__email} content={email}>{email}</Tooltip>
            <Tooltip className={classes.card__phone} content={phone}>{phone}</Tooltip>
        </div>
    )
};

export default Card;
