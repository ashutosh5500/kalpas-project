import React, {Component} from 'react';
import NewsCard from "./NewsCard";

const NewsCardHorizontal = ({posts = []}) => {
    // const {posts = []} = this.props;
    return (
        <div>
            {
                posts.map(item => {
                    return <NewsCard id={item.id}
                                     body={item.body}
                                     title={item.title}
                                     dateAndTime={'Mon,21 Dec 2021 14:57 GMT'}
                    />
                })
            }

        </div>
    );
}


export default NewsCardHorizontal;