import React, { useState } from 'react';
import style from "../../../styles/createBudget.module.css";
import Layout from "../../../app/components/Layout";
import { getBudgetHistory,updateBudgetHistory } from "../../../lib/data";

export default function CreateBudget() {
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

    const handleCreateBudget = () => {
        const newBudget = {
            id: getBudgetHistory().length + 1, // Генерируем новый ID
            budgetNo: budgetData.budgetNo,
            budgetDescription: budgetData.budgetDescription,
            budgettedAmount: parseFloat(budgetData.budgettedAmount),
            actualAmount: 0, // Пока что оставляем нулевым
            variance: 0, // Пока что оставляем нулевым
            date: budgetData.date,
            isPositive: false, // Пока что оставляем отрицательным
        };
        
        console.log("New budget:", newBudget);
        // Здесь вы можете выполнить любую логику для сохранения бюджета
        let updatedBudgetHistory =getBudgetHistory(); // Создаем копию массива
        console.log(updatedBudgetHistory);
        updatedBudgetHistory.push(newBudget);
        updateBudgetHistory(updatedBudgetHistory);
        console.log(getBudgetHistory());
        // Очищаем поля ввода после создания бюджета
        setBudgetData({
            budgetNo: "",
            budgetDescription: "",
            budgettedAmount: "",
            date: "",
            receivingOffice: "",
        });
    };

    return (
        <Layout>
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
