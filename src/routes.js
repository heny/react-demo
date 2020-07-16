import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BasicLayout, BlankLayout } from '@/layouts';
import { RouteInterceptor, Loading } from '@/components';
import Loadable from 'react-loadable';
import Page404 from './modules/Common/404';

const lazy = Name =>
    Loadable({
        loader: () => import(`./modules/${Name}`),
        loading: Loading
    });

const blankRoutes = [
    {
        path: '/common',
        exact: false,
        component: 'Common'
    }
];

const basicRoutes = [
    {
        path: '/home',
        exact: false,
        withBread: false,
        component: 'Home'
    }
];

export default (
    <Switch>
        <Route
            path='/'
            exact
            render={() => <Redirect to='/home' />}
        />
        {basicRoutes.map(item => (
            <RouteInterceptor
                key={item.path}
                withBread={item.withBread}
                layout={BasicLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}
        {blankRoutes.map(item => (
            <RouteInterceptor
                key={item.path}
                layout={BlankLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}
        <Route component={Page404} />
    </Switch>
);
