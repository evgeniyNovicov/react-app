import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map (p => <Post message={p.message} likeNumber={p.likeNumber} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(onPostChangeActionCreator(text))
}

  return <div className={classes.postBlock}>
    <div className={classes.item}>
     <h3>My post</h3>
    </div>
    {props.number}
    <div>
      <div>
         <textarea onChange={onPostChange} ref={newPostElement}
         value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
    </div>
    <div className={classes.posts}>
     {postsElements}
      </div>
    </div>
}

export default MyPosts;