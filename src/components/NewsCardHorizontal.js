import React, {Component} from 'react';
import NewsCard from "./NewsCard";

const NewsCardHorizontal = ({posts = [], deletePost}) => {
    // const {posts = []} = this.props;
    return (
        <div>
            {
                posts.map(item => {
                    return <NewsCard {...item}/>
                })
            }

        </div>
    );
}


export default NewsCardHorizontal;