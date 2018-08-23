import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import { requireAuth } from 'hoc/requireAuth';

export class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //TODO - Call action creator and sent the comments to Redux Store
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''})
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
            </Fragment>
        )
    }
}

const mapActionDispatch = {
    saveComment,
    fetchComments
}

export default connect(null, mapActionDispatch)(requireAuth(CommentBox));

