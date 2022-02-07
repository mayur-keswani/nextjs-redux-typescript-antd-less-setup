import { ComponentType, FC } from "react";

export type NextPageWithProps = FC & {
  layout?: ComponentType;
  isProtected?:boolean;
};
