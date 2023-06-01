
import { useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalhandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () =>{
    setModalIsVisible(true);
  }
  return (
    <>
    <MainHeader onCreatePost = {showModalHandler}/>
    <PostsList isPosting = {modalIsVisible} onStopPosting = {hideModalhandler}/>
  </>
  );
}

export default App;
