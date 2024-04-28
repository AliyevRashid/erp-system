'use client'
import { ReactElement, useState } from "react";
import Layout from "@/app/components/Layout";
import { useRouter } from "next/navigation"
import TotalInfo from "@/app/components/TotalInfo";
import SalaryDefinition from "@/app/components/tables/SalaryDefinition";
import TaxDefinition from "@/app/components/tables/TaxDefinition";
import PayLips from "@/app/components/tables/PayLips";
import PayRoll from "@/app/components/tables/Payroll";
import style from "../../../styles/payrollStyle.module.css"


interface PayrollsProps{
    userId:number
}

export default function Payroll({userId}:PayrollsProps){

    const [componentToShow, setComponentToShow] = useState<ReactElement|null>(null);

    const handleButtonClick = async (buttonName:string) => {
      let data;
      switch (buttonName) {
        case "salaryDefinition":
          data = await sendReguest(buttonName)
          setComponentToShow(<SalaryDefinition data={data}/>);
          break;
        case "taxDefinition":
          data = await sendReguest(buttonName)
          setComponentToShow(<TaxDefinition data={data} />);
          break;
        case "paylips":
           data = await sendReguest(buttonName)
          setComponentToShow(<PayLips data={data} />);
          break;
        case "payroll":
           data = await sendReguest(buttonName)
          setComponentToShow(<PayRoll data={data} />);
          break;
        default:
          setComponentToShow(null);
          break;
      }
    };
    return(
        <Layout userId={userId}>
            <div> 
            <div><h2>Payroll will be create soon</h2></div>
            <div className={style.totalInfoContainer}>
                <TotalInfo 
                   number="5,205,350.00" 
                   description="Gross Salary  this month" 
                   url="https://cdn-icons-png.flaticon.com/512/3589/3589169.png" />
                <TotalInfo 
                   number="4,550,350.00" 
                   description="Net Salary  this month" 
                   url="https://cdn-icons-png.flaticon.com/512/3589/3589169.png" />
                <TotalInfo 
                   number="550,350.00" 
                   description="Total tax this month" 
                   url="https://cdn-icons-png.flaticon.com/512/3589/3589169.png" />
                <TotalInfo 
                   number="150,350.00" 
                   description="Total loan this month" 
                   url="https://cdn-icons-png.flaticon.com/512/3589/3589169.png" />
            </div>
            <div className={style.buttonsContainer}>
                <button className={style.button} onClick={()=>handleButtonClick('salaryDefinition')}>Salary Breakdown</button>
                <button className={style.button} onClick={()=>handleButtonClick('taxDefinition')}>Tax Definitions</button>
                <button className={style.button} onClick={()=>handleButtonClick('paylips')}>Payslips</button>
                <button className={style.button} onClick={()=>handleButtonClick('payroll')}>Payroll</button>
            </div>
            <div>
                {componentToShow}
            </div>
            </div>
        </Layout>
    )
}

async function sendReguest(value:string){
  const response = await fetch (`/api/${value}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
   if(response.ok)
    {
        return response.json();
    }
    else{
        return null;
    }
}