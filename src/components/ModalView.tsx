import React, { CSSProperties } from "react";
import { useModalState } from "../store";
import { Modal } from "../types";
import { ModalProvider } from "./ModalProvider";

export const ModalView: React.FC = (props) => {
  const modals = useModalState();

  const activeModal = React.useMemo(() => {
    if (modals.length === 0) return null;
    return modals[0];
  }, [modals])

  const ActiveModal = ({ modal }: { modal: Modal }) => {
    return (
      <ModalProvider id={modal.id}>
        {modal.element}
      </ModalProvider>
    );
  }

  const WrappedActiveModal = (): JSX.Element | null => {
    if (activeModal == null) return null;
    // if (props.overlap) {
    //   let reversed = [...modals].reverse();
    //   return <>{reversed.map(modal => <ActiveModal modal={modal} key={modal.id} />)}</>;
    // }
    return <ActiveModal modal={activeModal} />
  }
  
  return (
    <>
      {activeModal != null && <WrappedActiveModal />}
    </>
  )
}
