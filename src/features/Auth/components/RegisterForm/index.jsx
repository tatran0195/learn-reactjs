import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: theme.spacing(0),
        right: theme.spacing(0),
    },
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name.')
            .test('should has at least two words', 'Please enter at least two words.', (value) => {
                // This is custom validation rule
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email address.').email('Please enter the valid email address.'),
        password: yup.string().required('Please enter your password.').min(6, 'Please enter at least six letters.'),
        retypePassword: yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Password does not match.'),
    });

    const form = useForm({
        // must declare all field of object 'form'
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },

        // should declare exact name is resolver
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

        form.reset();
    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="primary">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name *" form={form} />
                <InputField name="email" label="Email *" form={form} />
                <PasswordField name="password" label="Password *" form={form} />
                <PasswordField name="retypePassword" label="Retype Password *" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Create An Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
