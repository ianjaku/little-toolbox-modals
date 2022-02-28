import React from 'react';
import { ComponentMeta } from '@storybook/react';
import "./basicmodal.css";

import { BasicModalWrapper, ModalView, showModal, useModalHelpers } from "..";
import { hideAllModals } from '../store';

export default {
  title: 'Modals/ModalView',
  component: ModalView
} as ComponentMeta<typeof ModalView>;

const TestPopup = ({ children = "Default content", noBg = false, width = 300 }: { children?: JSX.Element | string, noBg?: boolean, width?: number }) => {
  const helpers = useModalHelpers();
  
  return (
    <div className="modal">
      {!noBg && <div className="modal__bg" onClick={() => helpers.hide()}></div>}
      <div className="modal__content" style={{ width: `${width}px`}}>{children}</div>
    </div>
  )
}

export const WithSimplePopup = () => {
  const show = () => {
    showModal(<TestPopup />);
  }
  
  return (
    <div>
      <ModalView />
      <button onClick={show}>Show Modal</button>
    </div>
  )
}

const TextInputModal = ({ children }: { children?: any }) => {
  const [msg, setMsg] = React.useState("");
  const helpers = useModalHelpers();
  const finish = () => helpers.hide(msg);
  
  return (
    <TestPopup>
      <>
        <input type="text" value={msg} onInput={e => setMsg((e.target as any).value)} />
        <button onClick={finish}>Submit</button>
        {children}
      </>
    </TestPopup>
  )
}

export const WithResponse = () => {
  const show = async () => {
    const result = await showModal(<TextInputModal />)
    console.log("Result:", result)
  }

  return (
    <div>
      <ModalView />
      <button onClick={show}>Show Modal</button>
    </div>
  )
}

export const WithMultiplePopups = () => {
  let counter = 0;
  const show = () => {
    showModal(
      <TestPopup>
        <>
          <div>Popup nummer: {counter++}</div>
          <div><button onClick={show}>Open popup</button></div>
          <div><button onClick={hideAllModals}>Close All</button></div>
        </>
      </TestPopup>
    )
  }

  return (
    <div>
      <ModalView />
      <button onClick={show}>Show Modal</button>
    </div>
  )
}

export const Overlapping = () => {
  let counter = 0;
  const show = () => {
    counter++
    showModal(
      <BasicModalWrapper>
        <div style={{ width: `${500 - counter * 50}px`, height: "100px", backgroundColor: "lightblue" }}>
          Testing - counter
          <div>
            <button onClick={show}>Open another</button>
          </div>
        </div>
      </BasicModalWrapper>,
      {
        overlap: true
      }
    )
  }

  return (
    <div>
      <ModalView />
      <button onClick={show}>Show Modal</button>
    </div>
  )
}
