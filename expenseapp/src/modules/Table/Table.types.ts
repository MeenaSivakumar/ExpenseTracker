export interface TableProps {
  statements: {
    description: string | null;
    category: "Income" | "Expense" | null;
    amount: number;
  }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}
