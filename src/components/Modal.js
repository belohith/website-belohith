import React from "react";

function Modal(props) {
  const { title, content, onClose } = props;

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="modal-content">{content}</div>
    </div>
  );
}

export default Modal;
