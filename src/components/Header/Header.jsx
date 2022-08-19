import React from 'react';
import classes from './Header.module.scss'
import Button from "../Button/Button";
import classnames from "classnames";


const Header = ({type}) => {
    // console.log(type)
    const headerClass = classnames({
        [classes.header]: true,
        [classes['header--desktop']]: type === 'desktop',
        [classes['header--laptop']]: type === 'laptop',
        [classes['header--tablet']]: type === 'tablet',
        [classes['header--mobile']]: type === 'mobile'
    })


    switch (type) {
        default: return (
            <div className={headerClass}>
                <a className={classes.header__logo} href="#"></a>
                <div className={classes.header__auth}>
                    <Button className={classes.header__user}>Users</Button>
                    <Button className={classes.header__signUp}>Sign up</Button>
                </div>
            </div>
        )
    }

};

export default Header;
