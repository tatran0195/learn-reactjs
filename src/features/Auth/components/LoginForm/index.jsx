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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Please enter your email address.')
            .email('Please enter the valid email address.'),
        password: yup.string().required('Please enter your password.'),
    });

    const form = useForm({
        // must declare all field of object 'form'
        defaultValues: {
            identifier: '',
            password: '',
        },

        // should declare exact name is resolver
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        // reset all if success or error
        // form.reset();
    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="primary">
                Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email *" form={form} />
                <PasswordField name="password" label="Password *" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
