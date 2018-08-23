import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';
import { getAuthState } from 'selectors/selectors';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export class App extends Component {

    renderButton = () => {
        const { auth, changeAuth } = this.props;
        return (
            <button className='btn-auth' onClick={() => changeAuth(auth)}>
                {auth ? 'Log Out' : 'Log In'}
            </button>
        );
    }

    renderHeader = () => {
        return (
            <ul className='navigation'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/post'>Posts</NavLink>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route path='/' component={CommentList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: getAuthState(state),
    }
}
const mapActionDispatch = {
    changeAuth
}
export default connect(mapStateToProps, mapActionDispatch)(App);
