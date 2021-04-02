import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import productApi from './api/productApi';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import Header from './components/Header';
import TodoFeature from './features/Todo';
import ProductFeature from 'features/Product';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            {/* always display in all routes */}
            {/* Link and NavLink use to navigate to another page */}
            {/* Use NavLink for customizing style of activeClassName{default=active} => Menu*/}
            {/* <p>
                <NavLink to="/todos">Todo</NavLink>
            </p>
            <p>
                <NavLink to="/albums">Album</NavLink>
            </p>
            <p>
                <NavLink to="/counters">Counter</NavLink>
            </p> */}
            <Header />
            {/* Switch run one-by-one and render the first matched path then exit, if not, render all matched route */}
            <Switch>
                <Redirect from="/home" to="/" exact />
                {/* <Redirect from="/post-list/:postId" to="/posts/:postId" exact /> */}

                <Route path="/" component={TodoFeature} exact />
                <Route path="/todos" component={TodoFeature} exact />
                <Route path="/albums" component={AlbumFeature} exact />
                <Route path="/counters" component={CounterFeature} exact />
                <Route path="/products" component={ProductFeature} exact />

                {/* If don't specify the path, it means if all above route do not match, it will run */}
                <Route component={NotFound} />
            </Switch>
            {/* always display in all routes */}
        </div>
    );
}

export default App;
