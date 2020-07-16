import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicLayout extends Component {
    static propTypes = {
        children: PropTypes.node
    };
    render() {
        const { children } = this.props;
        return (
            <div className='basic' >
                {/* 页面内容区 */}
                <div className='basic__bd'>
                   <div className='basic__bd__main'>
                       {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicLayout;
