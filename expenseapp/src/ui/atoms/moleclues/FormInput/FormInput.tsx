import { FormInputProps } from "./FormInput.types";

export const FormInput = ({
  label,
  text,
  inputType,
  onChange,
  value,
}: FormInputProps) => {
  return (
    <div>
      <label>
        {label}
        <input
          placeholder={text}
          type={inputType}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};
