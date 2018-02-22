import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {

    const list = props.comments.map(comment => <li key={comment}> {comment}</li>);
      console.log('comment',props.comments);
    return (
        <ul className="comment-list">{list}</ul>
    );
};

function mapStateToProps(state) {
    console.log('ds',state.comments);
    return { comments: state.comments }
}
export default connect(mapStateToProps)(CommentList);
