import {
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent<{
  clickOutside: () => void;
  renderContent: () => ReactNode;
}> = ({ clickOutside, renderContent }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  const handleClickOutside: EventListenerOrEventListenerObject = (e) => {
    const target = e.target as HTMLElement;

    if (target.id === "modal") {
      clickOutside();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    modalRoot.addEventListener("click", handleClickOutside);

    return () => {
      if (!elRef.current) {
        return;
      }

      modalRoot.removeChild(elRef.current);
      modalRoot.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return createPortal(<div>{renderContent()}</div>, elRef.current);
};

export default Modal;
