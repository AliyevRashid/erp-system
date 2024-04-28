import React from "react";
import style from "../../../styles/payrollStyle.module.css"


interface TaxDefinitionProps{
    data:{
        definitions: {
           id:number,
           taxtype:string,
           value:number

    }[];
}
}

export default function TaxDefinition({ data }: TaxDefinitionProps) {
    const { definitions } = data;
    console.log(data);
    return(
        <div className={style.tableContainer}>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tax Type</th>
                    <th>Value (%)</th>
                </tr>
            </thead>
            <tbody>
                {definitions.map(entry => (
                    <tr key={entry.id}>
                        <td>{entry.id}</td>
                        <td>{entry.taxtype}</td>
                        <td>{entry.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
