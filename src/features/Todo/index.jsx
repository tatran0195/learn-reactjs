import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Todo 1'
        },
        {
            id: 2,
            title: 'Todo 2'
        },
        {
            id: 3,
            title: 'Todo 3'
        }
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;