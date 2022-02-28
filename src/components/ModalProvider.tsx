import React, { FC, useContext, useMemo } from "react";
import { hideAllModals, hideModal, useModalState } from "../store";

export interface ModalProviderContextType {
  id: number | null;
}

export const ModalProviderContext = React.createContext<ModalProviderContextType>({
  id: null
})

export const ModalProvider: FC<{ id: number }> = ({ id, children }) => {
  return (
    <ModalProviderContext.Provider value={{ id }}>
      {children}
    </ModalProviderContext.Provider>
  )
}

export const useModalHelpers = () => {
  const state = useContext(ModalProviderContext);
  if (state.id == null) {
    throw new Error("useModalHelpers can only be used inside a modal.");
  }

  const modals = useModalState();
  const active = useMemo(() => {
    if (modals.length === 0) return false;
    return modals[0].id === state.id;
  }, [modals, state]);

  return {
    hide(result: any = null) {
      hideModal(state.id as number, result);
    },
    hideAll() {
      hideAllModals();
    },
    active
  }
}
