import mitt from "mitt";
import { ExoticComponent, ReactNode, useEffect, useState } from "react";
import { addOptionsDefaults } from "./options";
import { Modal, ModalOptions, modalOptionsDefaults } from "./types";

export const modalEmitter = mitt<{
  modals: Modal[]
}>();

let idCounter = 0;
let state: Modal[] = [];

export const useModalState = () => {
  const [modals, setModals] = useState(state);

  useEffect(() => {
    setModals(state);
    modalEmitter.on("modals", setModals);
    return () => modalEmitter.off("modals", setModals);
  }, [setModals])

  return modals;
}

export const showModal = <T>(element: JSX.Element, options: ModalOptions = {}): Promise<T> => {
  return new Promise((resolve) => {
    const optionsWithDefaults = addOptionsDefaults(options);
    const modal: Modal = { id: ++idCounter, element, resolve, options: optionsWithDefaults };
    state = [modal, ...state];
    modalEmitter.emit("modals", state);
  });
}

export const hideModal = (id: number, result: any = null) => {
  const modal = state.find(m => m.id === id);
  state = state.filter(modal => modal.id !== id);
  modalEmitter.emit("modals", state);
  if (modal != null) {
    modal.resolve(result);
  }
}

export const hideActiveModal = (result: any = null) => {
  if (state.length === 0) return;
  hideModal(state[0].id, result);
}

export const hideAllModals = () => {
  state.forEach(modal => modal.resolve(null));
  state = [];
  modalEmitter.emit("modals", state);
}
