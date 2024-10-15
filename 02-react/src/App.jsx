import { useState } from "react";
import PostList from "./components/PostList"
import MainHeader from "./components/MainHeader";


function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const showModalHandler = () => {
    setModalVisible(true)
  }

  const hideModalHanddler = () => {
    setModalVisible(false)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={modalVisible} onStopPosting={hideModalHanddler}/>
    </>
  )
  
}

export default App;
