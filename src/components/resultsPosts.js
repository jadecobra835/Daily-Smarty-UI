import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';

class ResultsPosts extends Component {
    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post type="result" key={index} {...post}/>
        });
        return posts;
    };
    
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="results-posts-posts">
                        {/* {this.renderPosts()} */}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // TEMPORARY
        // posts: state.posts.resultsPosts
        posts: state.posts.portfolio_items
    }
}

export default connect(mapStateToProps)(ResultsPosts);