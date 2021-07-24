import React, { useState } from "react";
import { Details } from "../Details/index";

export const Modal = () => {
  const [open, setOpen] = useState(true);
  const handleModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <button id="myBtn" onClick={handleModal}>
        Open Modal
      </button> */}
      {open ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Details />
          </div>
        </div>
      ) : null}
    </div>
  );
};
