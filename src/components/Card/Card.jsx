import React from 'react';
import classes from './Card.module.scss'
import Text from "../Text/Text";
import Image from "../Image/Image";


const Card = ({name, imgLink, post, email, phone}) => {
    return (
        <div className={classes.card}>
            <Image type={'avatar'} className={classes.card__image} src={imgLink} alt={'avatar'}/>
            <Text className={`${classes.card__name}`} type='cover'>{name}</Text>
            <Text className={`${classes.card__post}`} type='cover'>{post}</Text>
            <Text className={`${classes.card__email}`} type='cover'>{email}</Text>
            <Text className={`${classes.card__phone}`} type='cover'>{phone}</Text>
        </div>
    )
};

export default Card;
