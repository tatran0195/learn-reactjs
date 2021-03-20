import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Todo 1',
            status: 'New'
        },
        {
            id: 2,
            title: 'Todo 2',
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Todo 3',
            status: 'New'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState('all')

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one => always clone new one for array, object
        const newTodoList = [...todoList];
        // console.log(todo, index)

        // toggle state of todoList
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'New'? 'Completed' : 'New'
        }
        // newTodoList[index] = newTodo;
        // update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('Completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('New');
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;