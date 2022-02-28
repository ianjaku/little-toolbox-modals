import React, { useEffect } from "react";
import { useModalState } from "../store";
import { ModalWrapper, ModalWrapperContext } from "./ModalWrapper";

export const ModalView: React.FC = () => {
  const modals = useModalState();

  useEffect(() => console.log("Modals:", modals), [modals])

  const currentModal = React.useMemo(() => {
    if (modals.length === 0) return null;
    return modals[0];
  }, [modals])
  
  return (
    <>
      {currentModal != null && (
        <ModalWrapper id={currentModal.id}>
          {currentModal.element}
        </ModalWrapper>
      )}
    </>
    // <>
    //   {modals.map(modal => (
    //     <ModalWrapper key={modal.id} id={modal.id}>
    //       {/* <Modal.Component /> */}
    //       {modal.element}
    //     </ModalWrapper>
    //   ))}
    // </>
  )
}
