import React, {useEffect} from 'react';
import classes from "./GetSection.module.scss";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import Button from "../../components/Button/Button";
import {getUsers} from "../../app/features/users/actions";
import Message from "../../components/Message/Message";
import {showNextPage} from "../../app/features/users/usersSlice";


const GetSection = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const {users, totalPages, loading, error, currentPage} = usersList

    useEffect(() => {
        dispatch(getUsers({currentPage}))
    }, [dispatch, currentPage])

    const showMoreHandler = () => {
        dispatch(showNextPage())
    }

    return (
        <section className={classes.section}>
            <Heading>Working with GET request</Heading>
            <div className={classes.section__container}>
                {
                    loading
                        ? <Preloader/>
                        : error
                            ? <Message>{error}</Message>
                            : (
                                <div className={classes.grid}>
                                    {
                                        users.map((user, i) => (
                                            <Card key={i} name={user.name} email={user.email}
                                                  post={user.position} phone={user.phone}
                                                  imgLink={user.photo}/>
                                        ))
                                    }
                                </div>
                            )
                }

                {currentPage < totalPages && <Button className={classes.section__more} onClick={showMoreHandler}>Show more</Button>}
            </div>
        </section>
    );
};

export default GetSection;
