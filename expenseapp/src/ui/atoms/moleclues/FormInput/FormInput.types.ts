import { ReactNode } from "react";

export interface FormInputProps {
  label: string;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: React.HTMLInputTypeAttribute;
  value: string;
}
