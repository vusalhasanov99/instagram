import { useEffect, useState } from "react";
import Rout from "./Rout";
import { PostContext } from "./components/context/Context";

function App() {
  const [postDatas, setPostDatas] = useState([])
  useEffect(() => {
    fetch("https://instagram-9a517-default-rtdb.firebaseio.com/post.json")
      .then(res => res.json())
      .then(data => setPostDatas(...postDatas, Object.values(data)))
  }, [])
  const datas = {
    postDatas,
    setPostDatas
  }
  return (
    <PostContext.Provider value={datas}>
      <Rout />
    </PostContext.Provider>

  );
}

export default App;
