import React from "react";
import style from "../../../styles/payrollStyle.module.css"

interface PayLipData {
    
    id: number;
    StaffName: string;
    Title: string;
    Level: string;
    BasicSalary: string;
    Allowances: string;
    GrossSalary: string;
    Deduction: string;
    NetSalary: string;
}
interface PayLipsProps{
    data:{
   paylips: PayLipData[];}
}


export default function PayLips({ data }: PayLipsProps) {
    console.log('paylips data: ', data)
    
    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Staff Name</th>
                        <th>Title</th>
                        <th>Level</th>
                        <th>Basic Salary</th>
                        <th>Allowances</th>
                        <th>Gross Salary</th>
                        <th>Deduction</th>
                        <th>Net Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {data.paylips.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.StaffName}</td>
                            <td>{staff.Title}</td>
                            <td>{staff.Level}</td>
                            <td>{staff.BasicSalary}</td>
                            <td>{staff.Allowances}</td>
                            <td>{staff.GrossSalary}</td>
                            <td>{staff.Deduction}</td>
                            <td>{staff.NetSalary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
