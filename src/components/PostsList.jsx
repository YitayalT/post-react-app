import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event) =>{
      setEnteredBody(event.target.value)
  }
  const authorChangeHandler = (event) =>{
    setEnteredAuthor(event.target.value)
}


  return (
    <>
    <NewPost onBodyChange = {bodyChangeHandler} onAuthorChange = {authorChangeHandler}/>
    <ul className={classes.posts}>
      <Post author={enteredAuthor} body={enteredBody}/>
    </ul>
    </>
  );
}

export default PostsList;