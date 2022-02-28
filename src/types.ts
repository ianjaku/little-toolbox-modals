import { ExoticComponent, ReactNode } from "react";

export interface Modal {
  id: number;
  element: JSX.Element;
  resolve: (result: any) => void;
}
