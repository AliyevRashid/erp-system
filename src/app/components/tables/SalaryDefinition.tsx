import React from "react";
import style from "../../../styles/payrollStyle.module.css"

interface SalaryDefinitionProps {
  data: {
    definitions: {
      id: number;
      Title: string;
      Level: string;
      BasicSalary: number;
      Allowance: number;
      GrossSalary: number;
      Deductions: number;
      NetSalary: number;
    }[];
  };
}

export default function SalaryDefinition({ data }: SalaryDefinitionProps) {
  const { definitions } = data; // Деструктуризация свойства definitions из data
  console.log(definitions); // Проверка данных в консоли
  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Level</th>
            <th>Basic Salary</th>
            <th>Allowance</th>
            <th>Gross Salary</th>
            <th>Deductions</th>
            <th>Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {definitions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Title}</td>
              <td>{item.Level}</td>
              <td>{item.BasicSalary}</td>
              <td>{item.Allowance}</td>
              <td>{item.GrossSalary}</td>
              <td>{item.Deductions}</td>
              <td>{item.NetSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
