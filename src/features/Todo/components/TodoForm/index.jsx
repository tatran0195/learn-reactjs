import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title').min(5, 'Title is too short'),
    });

    const form = useForm({
        // must declare all field of object 'form'
        defaultValues: {
            title: '',
        },

        // should declare exact name is resolver
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
