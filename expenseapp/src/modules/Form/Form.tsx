import { useState } from "react";
import { Button } from "../../ui/atoms/Button/Button";
import { FormInput } from "../../ui/atoms/moleclues/FormInput/FormInput";
import { FormProps } from "./Form.types";

export const Form = ({ onSubmit, onClick }: FormProps) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      ...(formData as {
        description: string | null;
        category: "Income" | "Expense" | null;
        amount: number;
      }),
    });
    console.log(formData);
  };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            textAlign: "left",
          }}
        >
          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            text={"Enter your descrption..."}
            label={"Description"}
          />
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Expense"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              Expense
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Income"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              Income
            </label>
          </div>

          <FormInput
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            text={"Enter your Amount"}
            label={"Amount"}
          />
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button onClick={onClick} label="cancel" />

            <div
              style={{
                display: "flex",
                marginLeft: 100,
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={() => {}} label="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
