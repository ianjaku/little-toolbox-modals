
export const modalOptionsDefaults: ModalOptions = {
  overlap: false
}

export interface ModalOptions {
  /*
    Default: false

    If another modal is already active, will keep the old modal visible behind this modal.
    It's advised to make sure the shadow/background of the old modal is hidden while not active.
    The BasicModalWrapper already does this for you.
  */
  overlap?: boolean
}

export interface Modal {
  id: number;
  element: JSX.Element;
  resolve: (result: any) => void;
  options: ModalOptions;
}
