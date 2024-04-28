'use client'
import React, { useState } from 'react';
import style from "../../../styles/createBudget.module.css";
import Layout from "../../../app/components/Layout";
import {useRouter} from "next/navigation"

export default function CreateBudget() {
    const router = useRouter();
    const [budgetData, setBudgetData] = useState({
        budgetNo: "",
        budgetDescription: "",
        budgettedAmount: "",
        date: "",
        receivingOffice: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBudgetData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const  handleCreateBudget = async () => {
        const newBudget = {
            // Генерируем новый ID
            budgetNo: budgetData.budgetNo,
            budgetDescription: budgetData.budgetDescription,
            budgettedAmount: parseFloat(budgetData.budgettedAmount),
            actualAmount: 0, // Пока что оставляем нулевым
            variance: 0, // Пока что оставляем нулевым
            date: budgetData.date,
            isPositive: false, // Пока что оставляем отрицательным
        };
        
        const response = await fetch('/api/createBudget', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBudget),
          });
          if(response.ok)
          {
            console.log("new budget added!");
          }
          else{
             router.push('/1/officeBudget');
          }
        setBudgetData({
            budgetNo: "",
            budgetDescription: "",
            budgettedAmount: "",
            date: "",
            receivingOffice: "",
        });
    };

    return (
        <Layout userId={1}>
            <div>
                <div className={style.headerContainer}>
                    <div className={style.imgContainer}>
                        <img className={style.img} src="https://cdn-icons-png.flaticon.com/512/11323/11323102.png" />
                    </div>
                    <h3>Create Budget</h3>
                </div>
                <button className={style.BackButton}>Back</button>
                <div>
                    <h3>Create Budget</h3>
                    <p>Kindly fill in the form below to create a budget</p>
                    <div className={style.inputsContainer}>
                        <div className={style.inputContainer}>
                            <p>Budget Number</p>
                            <input className={style.input} type="text" name="budgetNo" value={budgetData.budgetNo} onChange={handleChange} placeholder="Enter item" />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Budget description</p>
                            <input className={style.input} type="text" name="budgetDescription" value={budgetData.budgetDescription} onChange={handleChange} placeholder="Enter description" />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Budget Amount</p>
                            <input className={style.input} type="text" name="budgettedAmount" value={budgetData.budgettedAmount} onChange={handleChange} placeholder="Enter amount in $" />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Date</p>
                            <input className={style.input} type="date" name="date" value={budgetData.date} onChange={handleChange} placeholder="DD/MM/YY " />
                        </div>
                        <div className={style.inputContainer}>
                            <p>Receiving Office</p>
                            <input className={style.input} type="text" name="receivingOffice" value={budgetData.receivingOffice} onChange={handleChange} placeholder="Enter receiving office" />
                        </div>
                    </div>
                    <button className={style.createBudgetButton} onClick={handleCreateBudget}>Create Budget</button>
                </div>
                <div></div>
            </div>
        </Layout>
    );
}
