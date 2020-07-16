/* eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history'
import { ConfigProvider } from '@/components';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import createStore from './store';
import moduleModels from './modules/models';
import routes from './routes';

const history = createHashHistory();
const models = {
    ...moduleModels
};
const store = createStore(models);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConfigProvider locale={zhCN}>
                    <ConnectedRouter history={history}>
                        {routes}
                    </ConnectedRouter>
                </ConfigProvider>
            </Provider>
        );
    }
}

export default App;
