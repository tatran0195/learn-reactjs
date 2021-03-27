import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import AlbumListPage from './pages/AlbumListPage';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const parentPath = useRouteMatch();

    return (
        <div>
            <h1>Favorites Song Lists</h1>

            <Switch>
                <Route path={parentPath.path} component={AlbumListPage} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default AlbumFeature;
