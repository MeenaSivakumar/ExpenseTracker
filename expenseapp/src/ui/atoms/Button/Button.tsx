import { ButtonProps } from "./Button.types";

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: 10,
            width: 50,
            height: 30,
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
};
