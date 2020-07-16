import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import md5 from 'blueimp-md5';
import { getParameterByName } from '@/helper/util';
import { secretKey } from '@/helper/constant';

/**
 * 路由拦截器
 */
@withRouter
class RouteInterceptor extends Component {
    static propTypes = {
        userMenu: PropTypes.array,
        withBread: PropTypes.bool,
        layout: PropTypes.any,
        location: PropTypes.object,
        component: PropTypes.any
    };

    render() {
        const { layout, component, location, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={(props) => {
                    const { pathname } = location;

                    // 默认为true
                    props.withBread = rest.withBread === undefined;

                    // 用户刷新浏览器前, 给与提示, 仅限编辑页
                    window.onbeforeunload = function(e) {
                        const isDev = window.location.host.includes('localhost');
                        if (isDev) {
                            return undefined;
                        }
                        if (location.pathname.includes('/update')) {
                            return '确认离开吗?';
                        } else {
                            return undefined;
                        }
                    };

                    // 防止用户手动篡改 url
                    const sign = getParameterByName('sign');
                    const isMatch = md5(secretKey + pathname) === sign;
                    if (sign && !isMatch) {
                        return <Redirect to='/common/404' />;
                    } else {
                        return React.createElement(layout, props, React.createElement(component, props));
                    }
                }}
            />
        );
    }
}

export default RouteInterceptor;
