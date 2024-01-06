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
      <div style={{ display: "flex" }}>
        <NewTopSort />
        <CardViewSort />
      </div>
      <div style={{ display: "flex" }}>
        <CreatePostButton />
      </div>
    </div>
  );
};

export default TogglesBar;
