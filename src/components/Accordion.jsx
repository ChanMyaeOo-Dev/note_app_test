import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="m-4">
      <div
        onClick={handleShow}
        className="select-none cursor-pointer bg-white p-3"
      >
        <p className="text-blue-500">Hello</p>
      </div>

      {show && (
        <div className="bg-white p-3 animate__animated animate__fadeIn animate__fast">
          <p className="text-gray-500 select-none cursor-pointer">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            corporis laboriosam eius obcaecati quia. Nesciunt reprehenderit,
            molestiae neque doloremque sed, minima amet quisquam iste nemo, illo
            iure explicabo praesentium omnis!
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
