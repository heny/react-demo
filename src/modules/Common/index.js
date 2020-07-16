import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from '@/components';

const lazy = Name => Loadable({
    loader: () => import(`./${Name}`),
    loading: Loading
});

export default ({ match }) => ( // eslint-disable-line
    <Switch>
        <Route exact path={`${match.path}/404`} component={lazy('404')} />
    </Switch>
);
