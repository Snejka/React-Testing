import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthState } from 'selectors/selectors';

export const requireAuth = (ChildComponent) => {

    class ComposedComponent extends Component {
        handleAuth = () => {
            !this.props.auth && this.props.history.push('/');
        }

        render() {
            return <ChildComponent {...this.props}/>
        }

        componentDidMount() {
            console.log(this.props)
            this.handleAuth();
        }

        componentDidUpdate() {
            this.handleAuth();
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: getAuthState(state)
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
}


export default requireAuth;
