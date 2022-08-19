import React, {useEffect} from 'react';
import classes from './Former.module.scss'
import imgSuccess from './../../img/success-min.png'
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Text from "../Text/Text";
import Textarea from "../Textarea/Textarea";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {getPositions} from "../../app/features/positions/actions";
import Message from "../Message/Message";
import {FastField, Formik, Form} from 'formik';
import {validate} from "./FormValidate"
import {getUsers, register} from "../../app/features/users/actions";
import {resetUsers} from "../../app/features/users/usersSlice";
import classnames from "classnames";
import Image from "../Image/Image";


const Former = ({title}) => {
    const dispatch = useDispatch()
    const registerUser = useSelector(state => state.register)
    const {loading, error, success} = registerUser
    const positionsList = useSelector(state => state.positionsList)
    const {positions, loading: loadingPositions, error: errorPositions} = positionsList
    const usersList = useSelector(state => state.usersList)
    const {currentPage} = usersList

    useEffect(() => {
        if (!positions.length) {
            dispatch(getPositions())
        }
    }, [dispatch, positions])

    useEffect(() => {
        if (success) {
            if (currentPage > 1) {
                dispatch(resetUsers())
            } else {
                dispatch(resetUsers())
                dispatch(getUsers({currentPage: 1}))
            }
        }
    }, [dispatch, success])

    return (
        <>
            {success
                ? (
                    <>
                        <Heading>{'User successfully registered'}</Heading>
                        <Image className={classnames({[classes.successImage]: true})} src={imgSuccess} alt={'success'}/>
                    </>
                )
                : (<>
                    <Heading>{title}</Heading>
                    <div className={classes.container}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                position: null,
                                file: null
                            }}
                            validate={validate}
                            onSubmit={(values, {resetForm}) => {
                                dispatch(register({
                                    name: values.name,
                                    email: values.email,
                                    phone: values.phone,
                                    position_id: values.position,
                                    photo: values.file
                                }))
                                resetForm({values: ''})
                            }}
                        >
                            {(formik) => (
                                <Form className={classes.form}>
                                    <FastField name="name">
                                        {({field, form, meta}) => (
                                            <Input
                                                className={classes.form__input}
                                                name="name"
                                                onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                value={field.value}
                                                label={'Your name'}
                                                error={form.errors.name}
                                            />
                                        )}
                                    </FastField>


                                    <FastField name="email">
                                        {({field, form, meta}) => (
                                            <Input
                                                className={classes.form__input}
                                                name="email"
                                                onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                value={field.value}
                                                label={'Email'}
                                                error={form.errors.email}
                                            />
                                        )}
                                    </FastField>

                                    <FastField name="phone">
                                        {({field, form, meta}) => (
                                            <Input
                                                className={classes.form__input}
                                                name="phone"
                                                onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                value={field.value}
                                                label={'Phone'}
                                                error={form.errors.phone}
                                                info={'+38 (XXX) XXX - XX - XX'}
                                            />
                                        )}
                                    </FastField>
                                    {
                                        loadingPositions
                                            ? <Preloader/>
                                            : errorPositions
                                                ? <Message>{error}</Message>
                                                : (
                                                    <div className={classes.form__radioSection}>
                                                        <FastField name='position'>
                                                            {({field, form, meta}) => (
                                                                <div>
                                                                    <Text className={classes.form__subtitle}>
                                                                        Select your position
                                                                        {form.errors.position && (
                                                                            <span className={
                                                                                classnames({
                                                                                    [classes.form__message]: true,
                                                                                    [classes['form__message--danger']]: form.errors.position
                                                                                })}>
                                                                        {form.errors.position}
                                                                    </span>)
                                                                        }
                                                                    </Text>
                                                                    {positions.map(({id, name, value}) => (
                                                                        <Input
                                                                            checkedValue={field.value}
                                                                            key={id}
                                                                            label={name}
                                                                            name={'position'}
                                                                            type={'radio'}
                                                                            value={id}
                                                                            onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </FastField>
                                                    </div>
                                                )
                                    }

                                    <FastField name="file">
                                        {({field, form, meta}) => (
                                            <Textarea
                                                error={form.errors.file}
                                                fileName={form.values.file?.name}
                                                onChange={(e) => {
                                                    form.handleChange(e)
                                                    form.setFieldValue("file", e.target.files[0], true)
                                                }}
                                            />
                                        )}
                                    </FastField>

                                    <Button
                                        buttonType={'submit'}
                                        className={classes.form__submit}
                                        type={'disabled'}>
                                        Sign up
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        {loading && <Preloader/>}
                        {error && <Message>{error}</Message>}
                    </div>
                </>)
            }
        </>
    )

};

export default Former;
