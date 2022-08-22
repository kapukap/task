import React from 'react';
import classes from "./PostSection.module.scss";
import Former from "../../components/Former/Former";

const PostSection = () => {

    return (
        <section className={classes.section}>
            <Former title={'Working with POST request'}/>
        </section>
    );
};

export default PostSection;
