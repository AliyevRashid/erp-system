import {connectToDatabase,getAllPaylips} from "../../../../database/database";
import { NextResponse } from 'next/server';


export async function GET(req,res){
    console.log("Hello from Paylips Get")
    
    const paylips = await getAllPaylips();
    if(paylips.length>0)
    {
        console.log('paylipsData\n',paylips);
        return NextResponse.json({paylips})
    }
    else{
         return NextResponse.json({ message: 'SalaryDefinitions have not data' });
    }

}


export async function POST(req,res){

    console.log("Hello from Paylips POST")
    
    const data = await req.json();;
    console.log(data);
    const id = await getAllPaylips().length + 1;

    const payLip= {
        id: id,
        StaffName: data.staffName,
        Title:data.title,
        Level:data.level,
        BasicSalary:data.basicSalary,
        Allowances:data.allowances,
        GrossSalary:data.grossSalary,
        Deduction:data.deduction,
        NetSalary:data.netSalary 
    }
    const db = await connectToDatabase();
    const collection = db.collection('payLips')
    await collection.insertOne(payroll);
}