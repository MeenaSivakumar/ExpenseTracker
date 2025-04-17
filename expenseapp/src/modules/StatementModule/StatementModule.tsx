import { useState } from "react";
import { FormPage } from "../../pages/Form/FormPage";
import { Button } from "../../ui/atoms/Button/Button";
import { Form } from "../Form";
import { Table } from "../Table";
import { useNavigate } from "react-router-dom";

type statement = {
  description: string | null;
  category: "Income" | "Expense" | null;
  amount: number;
};
export const StatementModule = () => {
  const [statementList, setStatementList] = useState<statement[]>([]);
  const [showForm, setShowForm] = useState(false);
  const handleStatements = (newSatement: statement) => {
    setStatementList([...statementList, newSatement]);
    setShowForm(false);
  };
  const handleEdit = (index: number) => {};

  const handleDelete = (index: number) => {
    const updatedList = [...statementList];
    updatedList.splice(index);
    setStatementList(updatedList);
  };
  return (
    <>
      <div style={{ marginTop: "50", padding: 20 }}>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20" }}
        >
          <Button label="add" onClick={() => setShowForm(true)} />
        </div>
        {showForm ? (
          <Form
            onSubmit={handleStatements}
            onClick={() => setShowForm(false)}
          />
        ) : (
          <Table
            statements={statementList}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      </div>
    </>
  );
};
