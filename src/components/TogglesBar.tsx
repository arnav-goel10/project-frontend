import React from "react";
import NewTopSort from "./NewTopSort";
import CardViewSort from "./CardViewSort";
import CreatePostButton from "./CreatePostButton";

const TogglesBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <NewTopSort />
        <CardViewSort />
      </div>
      <div>
        <CreatePostButton />
      </div>
    </div>
  );
};

export default TogglesBar;
