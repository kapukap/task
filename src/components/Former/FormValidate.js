const megabytesToBytes = (mb) => {
    // 1 MB = 1,048,576 B
    return mb * 1048576
}

export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 2 || values.name.length > 60) {
        errors.name = 'Username should contain 2-60 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (values.email.length < 2 || values.email.length > 60) {
        errors.email = 'Email should contain 2-60 characters';
    } else if (!/(^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)/i.test(values.email)) {
        errors.email = 'User email, must be a valid email according to RFC2822';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (!/(^[\+]{0,1}380([0-9]{9})$)/g.test(values.phone)) {
        errors.phone = 'User phone number. Number should start with code of Ukraine +380';
    }

    if (!values.position) {
        errors.position = 'Required';
    } else if (!Number.isInteger(Number(values.position)) || Number(values.position) <= 0) {
        errors.position = 'User`s position id. You can get list of all positions with their IDs using the API method GET api/v1/positions';
    }

    if (!values.file || !values.file.type || (!/(jpeg|jpg)/g.test(values.file.type)) || values.file.size > megabytesToBytes(5)) {
        errors.file = 'Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.';
    }

    return errors
}
