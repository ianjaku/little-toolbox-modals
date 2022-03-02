import React, { CSSProperties, useEffect } from "react";
import { setModalViewOptions } from "../options";
import { useModalState } from "../store";
import { Modal, ModalOptions } from "../types";
import { ModalProvider } from "./ModalProvider";

export const ModalView: React.FC<{
  defaultModalOptions?: ModalOptions
}> = ({ defaultModalOptions }) => {
  useEffect(() => {
    if (defaultModalOptions) {
      setModalViewOptions(defaultModalOptions);
    }
  }, [defaultModalOptions]);

  const modals = useModalState();

  const activeModal = React.useMemo(() => {
    if (modals.length === 0) return null;
    return modals[0];
  }, [modals])

  const shownModals = React.useMemo(() => {
    let result: Modal[] = [];
    for (const modal of modals) {
      result.push(modal);
      if (!modal.options.overlap) {
        break;
      }
    }
    return result;
  }, [modals])
  const reversedShownModals = React.useMemo(() => {
    return [...shownModals].reverse();
  }, [shownModals])

  const ActiveModal = ({ modal }: { modal: Modal }) => {
    return (
      <ModalProvider id={modal.id}>
        {modal.element}
      </ModalProvider>
    );
  }

  if (activeModal == null) return null;
  return (
    <>
      {reversedShownModals.map(modal => (
        <ActiveModal modal={modal} key={modal.id} />
      ))}
    </>
  );
}
