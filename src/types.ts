import { ReactNode } from "react";

export interface Modal {
  id: number;
  component: ReactNode;
  properties?: any;
}
