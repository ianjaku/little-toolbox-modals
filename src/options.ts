import { ModalOptions } from "./types";

let defaultOptions: ModalOptions = {
  overlap: false
};

let modalViewOptions = {};

export const setModalViewOptions = (options: ModalOptions) => {
  modalViewOptions = options;
}

const mergeOptions = (...optionsObjects: ModalOptions[]) => {
  let result: ModalOptions = {}
  for (const optionsObject of optionsObjects) {
    result = Object.assign(result, optionsObject);
  }
  return result;
}

export const addOptionsDefaults = (passedOptions: ModalOptions): ModalOptions => {
  return mergeOptions(defaultOptions, modalViewOptions, passedOptions);
}
