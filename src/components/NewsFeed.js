import React, {useEffect, useState} from 'react';
import NewsCardHorizontal from "./NewsCardHorizontal";
import Pagination from "./Pagination";
import axios from "axios";
import NewsCardVertical from "./NewsCardVertical";

const NewsFeed = ({layoutType}) => {
    const [posts, setPosts] = useState([]);
    const [postsCopy, setPostsCopy] = useState([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        axios.get(' https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const postData = response.data.slice(0, 15);
                setPosts(postData);
                setPostsCopy(postData.slice(0, 5));
            })
            .catch(error => console.log(error))
    }, []);

    const onPaginationChange = (number) => {
        setPagination(number);
        setPostsCopy(posts.slice((number -1) * 5, number * 5))
    }


    return (
        <div style={{marginTop: "50px"}}>
            {layoutType === 'HORIZONTAL' && <NewsCardHorizontal posts={postsCopy}/>}
            {layoutType === 'VERTICAL' && <NewsCardVertical posts={postsCopy}/>}
            <div>
                <Pagination posts={posts}
                            pagination={pagination}
                            onPaginationChange={onPaginationChange}/>
            </div>
        </div>
    );
};

export default NewsFeed;