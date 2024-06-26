import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state={
            height: 0
        }
    }

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })

        return topics;
    }

    getNameForPostLink(str) {
        var n = str.lastIndexOf('/');
        var link = str.substring(n + 1, link.lenth);

        if((n + 1) == str.length) {
            link = str.slice(0, n);
            n = link.lastIndexOf('/');
            link = str.subString(n + 1, link.length - 1);
        }

        if(link.includes('.html')) {
            link = link.substring(0, link.length - 5);
        }

        if(link.includes('.htm')) {
            link = link.substring(0, link.length - 4);
        }

        return link;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link-box">

                    </div>
                    
                    <div className="post-link-link">
                        <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)} #{index + 1}</a>
                    </div>
                </div>
            );
        });

        if (links == 0) {
            return <div className="no-content">No Post Links</div>
        };

        return links;
    };

    render() {
        if(this.props.type == 'recent') {
            return (
                <li className="recent-post">
                    <div className="recent-post-title">
                        {/* TEMPORARY */}
                        {/* {this.props.title} */}
                        {this.props.name}
                    </div>

                    <div className="recent-post-topics">
                        {/* TEMPORARY */}
                        {/* {this.renderTopics()} */}
                        {this.props.description}
                    </div>
                </li>
            )
        } else if(this.props.type == 'result') {
            return (
                <li className="result-post"
                    onMouseEnter={() => this.setState({height: 70})}
                    onMouseLeave={() => this.setState({height: 0})}
                >
                    <div className="result-post-topics">
                        {/* TEMPORARY */}
                        {/* {this.renderTopics()} */}
                        {this.props.description}
                    </div>

                    <div className="result-post-title">
                        <a href={this.props.url_for_post}>
                            {this.props.title}
                        </a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className="result-post-links">
                            {this.renderLinks()}
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
    }
}

export default Post;