import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClick, setClick] = useState(false);

  return (
    <>
      <h1>Like Button Pq nois e pika e o restou e buraco</h1>
      <p>Like Button from Microservice UHULLL</p>
      <p>Deu certo PRA caramba</p>
      <p>Deu certo PRA caramba 2x</p>
      <p>Deu certo PRA caramba 3x</p>
      <br />
      <p>Deu certo PRA caramba 4x</p>
      <p>Valeu adailton</p>
      <button onClick={() => setLikes(likes + 1)}>React Likes: {likes}</button>

      <ProgressBar completed={60} />
    </>
  );
};

//const LikeButton = () => <p>Like Button from Microservice</p>;

export default LikeButton;
