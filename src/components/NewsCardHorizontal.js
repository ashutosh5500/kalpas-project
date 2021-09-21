import React, {Component} from 'react';
import NewsCard from "./NewsCard";
import axios from 'axios'

class NewsCardHorizontal extends Component {

    render() {
        const {posts = []} = this.props;

        return (
            <div>
                {
                    posts.map(post => <NewsCard id={post.id}
                                                body={post.body}
                                                title={post.title}
                                                dateAndTime={'Mon,21 Dec 2021 14:57 GMT'}
                    />)
                }

            </div>
        );
    }
}

export default NewsCardHorizontal;