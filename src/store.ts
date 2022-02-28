import mitt from "mitt";
import { ExoticComponent, ReactNode, useEffect, useState } from "react";
import { Modal } from "./types";

export const modalEmitter = mitt<{
  modals: Modal[]
}>();

let idCounter = 0;
let state: Modal[] = [];

export const useModalState = () => {
  const [modals, setModals] = useState(state);

  useEffect(() => {
    setModals(state);
    console.log("Hello", state)
    modalEmitter.on("modals", (values) => {
      console.log("Updating!", values)
      setModals(values)
    });
    return () => modalEmitter.off("modals", setModals);
  }, [setModals])

  return modals;
}

export const showModal = (element: JSX.Element) => {
  const modal: Modal = { id: ++idCounter, element };
  state = [modal, ...state];
  modalEmitter.emit("modals", state);

  // TODO: wait for response
}

export const hideModal = (id: number) => {
  state = state.filter(modal => modal.id !== id);
  modalEmitter.emit("modals", state);
}

export const hideAllModals = () => {
  state = [];
  modalEmitter.emit("modals", state);
}
