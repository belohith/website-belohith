import React, { useState } from "react";
import Modal from "./Modal";

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Open Modal</button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default MyComponent;
