import React, {Component, useState} from 'react';
import NewsCardGrid from "./NewsCardGrid";
import './Component.scss'

const NewsCardVertical = ({posts = [], deletePost}) => {

    const [deleteNews, setDeleteNews] = useState([])

    const deleteNewsHandler = (id) => {

    }

    return <div className="row row-cols-1 row-cols-sm-3 g-4 NewsCardVertical">
        {posts.map(item => {
            return <NewsCardGrid id={item.id}
                                 title={item.title}
                                 body={item.body}
                                 dateAndTime={'Mon,21 Dec 2021 14:57 GMT'}
                                 deleteFeed={() => deletePost(item.id)}
            />
        })}
    </div>
}

export default NewsCardVertical;