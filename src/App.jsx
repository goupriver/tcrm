import React, { useState, useEffect, useMemo } from "react";
import "./app.css";
import useWriteText from "./useWriteText";
import Navigation from "./Navigation";
import Posts from "./Posts";
import database from "./database";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

function App() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState();
  const [statusModal, setStatusModal] = useState(false);

  useEffect(() => {
    onValue(ref(getDatabase(), "items/"), (result) => {
      const data = result.val();
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    if (posts) {
      set(ref(getDatabase(), "items/"), posts);
    }
  }, [posts]);

  function deletePost(id) {
    remove(ref(getDatabase(), `items/${id}`));
  }

  return (
    <div className="wrapper">
      <Navigation
        status={statusModal}
        setStatus={setStatusModal}
        post={post}
        posts={posts}
        setPost={setPost}
        setPosts={setPosts}
      />
      {posts ? <Posts posts={posts} copyText={useWriteText} deletePost={deletePost} /> : null}
    </div>
  );
}

export default App;
