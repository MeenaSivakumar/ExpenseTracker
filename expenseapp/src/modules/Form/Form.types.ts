export interface FormProps {
  onClick: () => void;
  onSubmit: (statement: {
    description: string | null;
    category: "Income" | "Expense" | null;
    amount: number;
  }) => void;
}
