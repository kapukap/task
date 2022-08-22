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
                                file: ''
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
                                resetForm()
                            }}
                        >
                            {({values, errors}) => (
                                <Form className={classes.form}>
                                    <FastField name="name">
                                        {({field, meta}) => (
                                            <>
                                                <Input
                                                    className={classes.form__input}
                                                    {...field}
                                                    label={'Your name'}
                                                    error={meta.touched && meta.error}
                                                />
                                            </>
                                        )}
                                    </FastField>


                                    <FastField name="email">
                                        {({field, meta}) => (
                                            <>
                                                <Input
                                                    className={classes.form__input}
                                                    {...field}
                                                    label={'Email'}
                                                    error={meta.touched && meta.error}
                                                />
                                            </>
                                        )}
                                    </FastField>

                                    <FastField name="phone">
                                        {({field, meta}) => (
                                            <Input
                                                className={classes.form__input}
                                                {...field}
                                                label={'Phone'}
                                                error={meta.touched && meta.error}
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
                                                                        {meta.touched && meta.error && (
                                                                            <Message type={'validationInlineError'}>
                                                                                {form.errors.position}
                                                                            </Message>)
                                                                        }
                                                                    </Text>
                                                                    {positions.map(({id, name}) => (
                                                                        <Input
                                                                            checkedValue={field.value}
                                                                            {...field}
                                                                            key={id}
                                                                            label={name}
                                                                            value={id}
                                                                            type={'radio'}
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
                                                error={meta.touched && meta.error}
                                                fileName={field.value.name}
                                                onChange={(e) => {
                                                    form.setFieldTouched(field.name, true)
                                                    form.setFieldValue(field.name, e.target?.files[0])
                                                }}
                                            />
                                        )}
                                    </FastField>

                                    <Button
                                        buttonType={'submit'}
                                        className={classes.form__submit}
                                        type={(values.name && !Object.keys(errors).length) ? 'primary' : 'disabled'}>
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
