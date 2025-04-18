import { useEffect, useState } from "react";
import { Button } from "../../ui/atoms/Button/Button";
import { Form } from "../Form";
import { Table } from "../Table";

type statement = {
  description: string | null;
  category: "Income" | "Expense" | null;
  amount: number;
};
export const StatementModule = () => {
  const [statementList, setStatementList] = useState<statement[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [defaultValues, setDefaultValues] = useState<statement | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleStatements = (newStatement: statement) => {
    if (editIndex !== null) {
      const updatedList = [...statementList];
      updatedList[editIndex] = newStatement;
      setStatementList(updatedList);
      setEditIndex(null);
    } else {
      setStatementList([...statementList, newStatement]);
    }
    setShowForm(false);
    setDefaultValues(null);
  };

  const handleEdit = (index: number) => {
    console.log("edit");
    setDefaultValues(statementList[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    const updatedList = [...statementList];
    updatedList.splice(index, 1);
    setStatementList(updatedList);
  };

  useEffect(() => {
    const totalIncome = statementList
      .filter((statement) => statement.category === "Income")
      .reduce((acc, cur) => acc + Number(cur.amount), 0);

    const totalExpense = statementList
      .filter((statement) => statement.category === "Expense")
      .reduce((acc, cur) => acc + Number(cur.amount), 0);

    setTotalAmount(totalIncome - totalExpense);
  }, [statementList]);
  return (
    <>
      <div style={{ marginTop: "50", padding: 20 }}>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20" }}
        >
          <Button
            label="add"
            onClick={() => {
              setDefaultValues(null);
              setEditIndex(null);
              setShowForm(true);
            }}
          />
        </div>
        {showForm ? (
          <Form
            onSubmit={handleStatements}
            onClick={() => {
              setShowForm(false);
              setDefaultValues(null);
              setEditIndex(null);
            }}
            defaultValues={defaultValues}
          />
        ) : (
          <>
            <Table
              statements={statementList}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>Total: {totalAmount}</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};
