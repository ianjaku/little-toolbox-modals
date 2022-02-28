import React, { FC, useContext } from "react";
import { hideAllModals, hideModal } from "../store";

export interface ModalWrapperContextType {
  id: number | null;
}

export const ModalWrapperContext = React.createContext<ModalWrapperContextType>({
  id: null
})

export const ModalWrapper: FC<{ id: number }> = ({ id, children }) => {
  return (
    <ModalWrapperContext.Provider value={{ id }}>
      {children}
    </ModalWrapperContext.Provider>
  )
}

export const useModalHelpers = () => {
  const state = useContext(ModalWrapperContext);
  if (state.id == null) {
    throw new Error("useModalHelpers can only be used inside a modal.");
  }

  return {
    hide() {
      hideModal(state.id as number);
    },
    hideAll() {
      hideAllModals();
    }
  }
}
