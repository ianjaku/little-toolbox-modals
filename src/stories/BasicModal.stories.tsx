import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "./basicmodal.css";

import { ModalView, showModal, useModalHelpers } from "..";
import { hideAllModals } from '../store';

export default {
  title: 'Modals/ModalView',
  component: ModalView
} as ComponentMeta<typeof ModalView>;

const TestPopup = ({ children = "Default content" }: { children?: JSX.Element | string }) => {
  const helpers = useModalHelpers();
  
  return (
    <div className="modal">
      <div className="modal__bg" onClick={() => helpers.hide()}></div>
      <div className="modal__content">{children}</div>
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
