import mitt from "mitt";
import React, { useState } from "react";
// import { useModalState } from "../store";
import { Modal } from "../types";

// let state: Modal[] = [];
// export const modalEmitter = mitt<{
//   modals: Modal[]
// }>();

export const ModalView: React.FC = () => {
  // const [modals, setModals] = React.useState<Modal[]>([]);
  const test = useState([]);

  // React.useEffect(() => {
  //   setModals(state);
  //   modalEmitter.on("modals", setModals);
  //   return () => modalEmitter.off("modals", setModals);
  // }, [setModals])
  
  return (
    <div className="modal-view">
      ModalView8:
      {/* {modals} */}
      {/* {modals.map(modal => (
        <div key={modal.id} className="modal">
          Modal
        </div>
      ))} */}
    </div>
  )
}
