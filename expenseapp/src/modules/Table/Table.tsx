
import { TableProps } from "./Table.types";
import { Button } from "../../ui/atoms/Button";

export const Table = ({ statements, onDelete, onEdit }: TableProps) => {
  return (
    <div style={{ marginTop: 25, display: "flex", justifyContent: "center" }}>
      <table border="1" style={{ borderCollapse: "collapse", width: "75%" }}>
        <thead>
          <tr>
            <th> Description</th>
            <th> Income</th>
            <th> Expense</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{statement.description}</td>
              <td style={{ color: "green", textAlign: "center" }}>
                {statement.category === "Income" ? `+${statement.amount}` : "-"}
              </td>
              <td style={{ color: "red", textAlign: "center" }}>
                {statement.category === "Expense"
                  ? `-${statement.amount}`
                  : "-"}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <Button label="edit" onClick={() => {}} />
                  <Button label="delete" onClick={() => onDelete(index)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
