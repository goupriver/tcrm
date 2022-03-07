import React from "react";

function Navigation({ status, setStatus, post, posts, setPost, setPosts }) {
  function addPost(e) {
    if (e.key === "Enter") {
      setPosts({...posts, [Date.now()]: post })
      setStatus(false);
    }
  }
  
  return (
    <div className="navigation">
      <button className="addPost" onClick={() => setStatus(true)}>
        Add
      </button>
      {status ? (
        <div className="modal" onClick={() => setStatus(false)}>
          <div className="form">
            <textarea
              onKeyDown={addPost}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              onClick={(e) => e.stopPropagation()}
              placeholder="Enter text...."
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navigation;
