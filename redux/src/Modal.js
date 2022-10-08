import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ clickOutside, renderContent }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  const handleClickOutside = (e) => {
    if (e.target.id === "modal") {
      clickOutside();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.appendChild(elRef.current);
    modalRoot.addEventListener("click", handleClickOutside);

    return () => {
      modalRoot.removeChild(elRef.current);
      modalRoot.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return createPortal(<div>{renderContent()}</div>, elRef.current);
};

export default Modal;
