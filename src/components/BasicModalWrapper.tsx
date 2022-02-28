import React from "react";
import { useModalHelpers } from "..";
import "./BasicModalWrapper.css";

export const BasicModalWrapper: React.FC<{
  /*
    If undefined -> Centers the modal
    If given -> Uses this as the top spacing
  */
  marginTop?: string;
  /*
    The color of the background when the modal is open.
    Has to be a valid css color.
    Defaults to rgba(0, 0, 0, 0.7)
   */
  backgroundColor?: string;
}> = (props) => {
  const { active, hide } = useModalHelpers();
  
  return (
    <div className="lt-modals__modal">
      {active && (
        <div
          onClick={hide}
          className="lt-modals__modal__bg"
          style={{
            backgroundColor: props.backgroundColor ?? "rgba(0, 0, 0, 0.7)"
          }}
        ></div>
      )}
      <div className="lt-modals__modal__content" style={{
        marginTop: props.marginTop ?? 0,
        display: props.marginTop ? "block" : "flex"
      }}>
        {props.children}
      </div>
    </div>
  )
}

