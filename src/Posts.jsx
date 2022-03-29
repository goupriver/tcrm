import React, { useState } from "react";

function Posts({ copyText, posts, deletePost }) {
  const [showPrompt, setShowPrompt] = useState("");
  const [showTargetClass, setShowTargetClass] = useState("showTarget");
  const [position, setPosition] = useState({ top: "", left: "" });

  function targetShow(e) {
    setShowPrompt(e.target.innerText);
    setShowTargetClass("showTarget active");
  }

  function targetHide(e) {
    setShowTargetClass("showTarget");
  }

  function promptPosition(e) {
    setPosition({ top: e.clientY + 10, left: e.clientX + 10 });
  }
  return (
    <div className="posts">
      {Object.keys(posts).map((key) => {
        return (
          <div
            key={key}
            onClick={copyText}
            onMouseOver={targetShow}
            onMouseOut={targetHide}
            onMouseMove={promptPosition}
            className="post"
          >
            {posts[key]}
            <span
              id={key}
              onMouseOver={(e) => e.stopPropagation()}
              onClick={(e) => deletePost(e.target.id)}
            ></span>
          </div>
        );
      })}
      <div style={position} className={showTargetClass}>
        {showPrompt}
      </div>
    </div>
  );
}

export default Posts;
