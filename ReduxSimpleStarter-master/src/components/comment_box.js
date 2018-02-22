import React, { Component, } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' }
    }
    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        this.props.saveComment(this.state.comment);
        event.preventDefault();
        this.setState({ comment: '' });
        console.log('boc',this.state.comment);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)} />
                <button action="submit">Submit</button>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox)
