import {  getAllBudgetHistory,connectToDatabase} from "../../../../database/database";
import { NextResponse } from 'next/server';


export async function POST(req,res){
  console.log("Hello from Api");
  try {
    const data = await req.json();;
    console.log(data);
    const id = await getAllBudgetHistory().length + 1;

    const newBudget = {
        id:id,
        budgetNo: data.budgetNo, 
        budgetDescription: data.budgetDescription, 
        budgettedAmount: data.budgettedAmount, 
        actualAmount: data.actualAmount, 
        variance: data.variance, 
        date: data.variance, 
        isPositive: false 
    }
    
    const db = await connectToDatabase();
    const collection = db.collection('budget_history');
    await collection.insertOne(newBudget); // Insert the budget data into MongoDB
    return NextResponse.json({ message: 'Budget created successfully' });
} catch (error) {
    console.error('Error creating budget:', error);
    return NextResponse.json({ error: 'Failed to create budget' });
}
}
