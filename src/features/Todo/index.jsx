import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    // get parent path
    const parentPath = useRouteMatch();

    return (
        <div>
            <h1>Todo Shared UI</h1>

            <Switch>
                <Route path={parentPath.path} component={ListPage} exact />
                {/* <Route path={`${parentPath.path}/:todoId`} component={DetailPage} exact /> */}

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;
