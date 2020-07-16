import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Spin } from '@/components';

class Loading extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                <Spin delay={180} size='large' style={{ marginTop: 250 }} />
            </div>
        );
    }
}

Loading.propTypes = {};

export default Loading;
