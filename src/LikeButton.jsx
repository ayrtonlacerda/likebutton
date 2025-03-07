import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClick, setClick] = useState(false);

  return (
    <>
      <p>Like Button from Microservice UHULLL</p>
      <button onClick={() => setLikes(likes + 1)}>React Likes: {likes}</button>

      <ProgressBar completed={60} />
    </>
  );
};

//const LikeButton = () => <p>Like Button from Microservice</p>;

export default LikeButton;
