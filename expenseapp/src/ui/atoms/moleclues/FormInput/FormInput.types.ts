export interface FormInputProps {
  label: string;
  text: string;
  onChange: () => void;
  inputType?: React.HTMLInputTypeAttribute;
  value: string;
}
