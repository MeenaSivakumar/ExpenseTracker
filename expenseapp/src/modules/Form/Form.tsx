import { useState } from "react";
import { Button } from "../../ui/atoms/Button/Button";
import { FormInput } from "../../ui/atoms/moleclues/FormInput/FormInput";
import { FormProps } from "./Form.types";

export const Form = ({
  onSubmit,
  onClick,
  defaultValues,
}: FormProps & { defaultValues: any }) => {
  const [formData, setFormData] = useState(defaultValues || {});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ ...formData, amount: Number(formData.amount) });
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
            value={formData.description || ""}
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
                checked={formData.category === "Expense"}
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
                checked={formData.category === "Income"}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              Income
            </label>
          </div>

          <FormInput
            value={formData.amount || ""}
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
