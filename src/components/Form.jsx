import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  console.log(text);
  const handleInput = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="p-4">
      <form action="#" method="GET">
        <div className="flex justify-between">
          <input
            type="text"
            className=" border-2 border-gray-200 px-2 py-2 rounded w-full me-3"
            placeholder="Note"
            value={text}
            onChange={handleInput}
          />
          <button className=" bg-blue-500 text-white px-4 rounded shadow">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
