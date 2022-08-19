import React from 'react';
import classes from "./TestSection.module.scss";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const TestSection = () => {
    return (
        <section>
            <div className={classes.info}>
                <div className={classes.info__wrapper}>
                    <Heading className={classes.info__title}>Test assignment for front-end developer</Heading>
                    <Text className={classes.info__desc}>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with
                        a vast understanding of User design thinking as they'll be building web interfaces with
                        accessibility in mind. They should also be excited to learn, as the world of Front-End
                        Development keeps evolving.
                    </Text>
                    <Button className={classes.info__signUp}>Sign up</Button>
                </div>
            </div>
        </section>
    );
};

export default TestSection;
