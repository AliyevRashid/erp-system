
import React from "react";
import style from "../../../styles/payrollStyle.module.css"


interface PayrollProps{
    data:{
        definitions:{
        id: number
        PaymentName:string,
        Designation:string,
        DateGenerated:string,
        PaymentMonth:string,
        PaymentYear:string,
        Status:string
    }[];
}
}


export default function PayRoll({ data }: PayrollProps) {
    console.log(data);
    const {definitions}=data;
   return (
    <div className={style.tableContainer}>
         <table className={style.table}>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Payment Name</th>
                        <th>Designation</th>
                        <th>Date Generated</th>
                        <th>Payment Month</th>
                        <th>Payment Year</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {definitions.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.PaymentName}</td>
                            <td>{item.Designation}</td>
                            <td>{item.DateGenerated}</td>
                            <td>{item.PaymentMonth}</td>
                            <td>{item.PaymentYear}</td>
                            <td>{item.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
   )
}
