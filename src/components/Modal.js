import React from "react";

function Modal({ onClose, content }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
