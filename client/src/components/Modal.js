import { useContext } from "react";
import AppContext from "../AppContext";

export const Modal = () => {
  const ctx = useContext(AppContext);
  return (
    <div key="555" className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
        >
          x
        </button>
        <div className="modal-body">I am a modal body</div>
      </div>
    </div>
  );
};
