"use client"
import TotalInfo from "../../../app/components/TotalInfo"
import Layout from "../../../app/components/Layout"
import Styles from "../../../styles/dashboard.module.css"
import styles from "../../../styles/officeBudget.module.css"
import {getBudgetHistory} from "../../../lib/data"
import { useRouter } from "next/navigation"





export default function OfficeBudget(){
    const router = useRouter()
    const budgetHistory=getBudgetHistory();
    return(
       <Layout>
          {/* header */}
          <div>
            <h2>Office Budget</h2>
          </div>
            <div className={Styles.TotalInfoContainer}>
              <TotalInfo number="23,000,000" description="Total annual budget" url="https://cdn-icons-png.flaticon.com/512/11323/11323102.png"/>
              <TotalInfo number="10,000,000" description="Amount used" url="https://cdn-icons-png.flaticon.com/512/7460/7460812.png"/>
              <TotalInfo number="13,000,000" description="Total budget balance" url="https://w7.pngwing.com/pngs/611/986/png-transparent-money-bag-computer-icons-bank-foreign-exchange-market-money-bag-purple-violet-service-thumbnail.png"/>
              <TotalInfo number="48%" description="Budget % used" url="https://cdn-icons-png.flaticon.com/512/4021/4021642.png"/>
            </div>

            <div className={styles.CreateBudgetContainer}>
              <h3>Create Budget</h3>
              <button className={styles.CreateBudgetButton} onClick={()=>{router.push('/1/officeBudget/createBudget')}}>Create Budget</button>
            </div>
            <h3 style={{margin:'24px',padding:'24px'}}>Budget History</h3>
            <div style={{margin:'12px 48px',padding:"24px",overflowY:'scroll',maxHeight:'700px'}}>
               <table>
                  <thead>
                      <tr>
                          <th className={Styles.tableData}><h4>S/N</h4></th>
                          <th className={Styles.tableData}><h4>Budget No</h4></th>
                          <th className={Styles.tableData}><h4>Budget Description</h4></th>
                          <th className={Styles.tableData}><h4>Budgetted Amount</h4></th>
                          <th className={Styles.tableData}><h4>Actual Amount</h4></th>
                          <th className={Styles.tableData}><h4>Variance</h4></th>
                          <th className={Styles.tableData}><h4>Date</h4></th>
                      </tr>
                  </thead>
                  <tbody>
                   {budgetHistory.map((budget)=>(
                       <tr key={budget.id}>
                       <td className={Styles.tableData}>{budget.id}</td>
                       <td className={Styles.tableData}>{budget.budgetNo}</td>
                       <td className={Styles.tableData}>{budget.budgetDescription}</td>
                       <td className={Styles.tableData}>{budget.budgettedAmount}</td>
                       <td className={Styles.tableData}>{budget.actualAmount}</td>
                       <td className={Styles.tableData} style={{color:budget.isPositive?'green':'red'}}>{budget.variance}</td>
                       <td className={Styles.tableData}>{budget.date}</td>
                     </tr>
                   ))}
                  </tbody>
                </table>
            </div> 
        </Layout>
    )
}