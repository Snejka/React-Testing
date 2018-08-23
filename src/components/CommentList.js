import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getComments } from 'selectors/selectors';

export class CommentList extends Component {

    renderComments = () => {
        return this.props.comments.map( (comment, i) => <li key={i}>{comment}</li> );
    }

    render () {
        return (
            <Fragment>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const comments = getComments(state);

    return {
        comments,
    }
}
export default connect(mapStateToProps)(CommentList);
