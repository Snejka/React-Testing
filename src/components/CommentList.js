import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from 'selectors/selectors';

export class CommentList extends Component {

    renderComments = () => {
        return this.props.comments.map( (comment, i) => <li key={i}>{comment}</li> );
    }

    render () {
        return (
            <ul>
                {this.renderComments()}
            </ul>
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
