import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <li>
                {/* {post.title} */}
                {this.props.title}
            </li>
        )
    }
}

export default Post;