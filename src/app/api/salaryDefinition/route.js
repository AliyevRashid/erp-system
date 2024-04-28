import { connectToDatabase,getAllSalaryDefinitions} from "../../../../database/database";
import { NextResponse } from 'next/server';


export async function POST(req,res){
    console.log("Heelo from Salary Definition Api")
    const data = await req.json();;
    console.log(data);
    const id = await getAllSalaryDefinitions().length + 1;

    const newSalaryDefinition = {
        id: id,
        Title: data.title,
        Level: data.level,
        BasicSalary: data.basicSalary,
        Allowance: data.allowance,
        GrossSalary: data.grossSalary,
        Deductions: data.deductions,
        NetSalary: data.netSalary 
    }
    
    const db = await connectToDatabase();
    const collection = db.collection('salaryDefinitions');
    await collection.insertOne(newSalaryDefinition);
}

export async function GET(req,res){
    console.log("Hello from Salary Definition Api")
    
    const definitions = await getAllSalaryDefinitions();
    if(definitions.length>0)
    {
        console.log(definitions);
        return NextResponse.json({definitions})
    }
    else{
         return NextResponse.json({ message: 'SalaryDefinitions have not data' });
    }

}
