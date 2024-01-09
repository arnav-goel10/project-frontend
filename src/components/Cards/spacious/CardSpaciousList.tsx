import React from "react";
import CardSpacious from "./CardSpacious";

const CardSpaciousList = () => {
  return (
    <div>
      <CardSpacious
        image={
          "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
        }
        title={"Recipe"}
        text={
          "CHECKINGLOLOLOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLl"
        }
        user_id="lol"
        like_count={4}
        comments_count={5}
      />
    </div>
  );
};

export default CardSpaciousList;
