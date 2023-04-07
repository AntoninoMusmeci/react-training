import React, { useState } from "react";
import { useGlobalContext } from "../context";
import "../app.css";
const MainContent = () => {
  const [showInput, setShowInput] = useState();
  const { name, setName } = useGlobalContext();
  const [newName, setNewName] = useState(name);

  return (
    <div>
      <p>{name}</p>
      <button
        onClick={() => {
          setShowInput(true);
        }}
      >
        {" "}
        edit{" "}
      </button>
      {showInput ? (
        <div>
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
          <button
            onClick={() => {
              setName(newName);
              setShowInput(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setNewName(name);
              setShowInput(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MainContent;
