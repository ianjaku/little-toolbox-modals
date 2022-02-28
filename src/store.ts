// import mitt from "mitt";
// import React from "react";
// import { ReactNode, useEffect, useState } from "react";
// import { Modal } from "./types";

// export const modalEmitter = mitt<{
//   modals: Modal[]
// }>();

// let idCounter = 0;
// let state: Modal[] = [];

export const useModalState = () => {

  // return modals;
  return "test";
}

// export const showModal = (component: ReactNode, properties: Record<string, any>) => {
//   const modal: Modal = { id: ++idCounter, component, properties };
//   const newModals = [modal, ...state];
//   modalEmitter.emit("modals", newModals);

//   // TODO: wait for response
// }
