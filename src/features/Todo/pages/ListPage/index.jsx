import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Todo 1',
            status: 'new',
        },
        {
            id: 2,
            title: 'Todo 2',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Todo 3',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        // window.location.search = ?..., e.g /todos?status=new
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    // useEffect: only run if dependencies has changed
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one => always clone new one for array, object
        const newTodoList = [...todoList];
        // console.log(todo, index)

        // toggle state of todoList
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        // newTodoList[index] = newTodo;
        // update todo list
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
        console.log(history);
    };

    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    // useMemo: only re-render if dependencies has changed
    const renderTodoList = useMemo(() => {
        return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus]);

    const handleTodoFormSubmit = (values) => {
        const maxTodoListId = todoList.reduce((max, todo) => (todo.id > max ? todo.id : max), todoList[0].id);
        const newTodo = {
            id: maxTodoListId + 1,
            title: values.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What Todo</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;
