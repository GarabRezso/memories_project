import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
  return (
    <div>
        POSTS
        <Post />
        <Post />
    </div>
  )
}

export default Posts