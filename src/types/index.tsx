import { MouseEventHandler } from "react";

//CustomButton bileşeninin aldığı propslar
export type ButtonProps = {
  title: string;
  designs?: string;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler;
};
export type OptionType = {
  label: string;
  value: string;
};
