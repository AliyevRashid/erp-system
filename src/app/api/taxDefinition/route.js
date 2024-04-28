import {connectToDatabase,getAllTaxDefinitions} from "../../../../database/database";
import { NextResponse } from 'next/server';


export async function GET(req,res){
    console.log("Hello from Tax Definition Api")
    
    const definitions = await getAllTaxDefinitions();
    if(definitions.length>0)
    {
        return NextResponse.json({definitions})
    }
    else{
         return NextResponse.json({ message: 'SalaryDefinitions have not data' });
    }

}


export async function POST(req,res){

    console.log("Hello from Tax Definition Api")
    
    const data = await req.json();;
    console.log(data);
    const id = await getAllTaxDefinitions().length + 1;

    const newTax= {
        id: id,
        taxType: data.taxType,
        value: data.value
    }
    const db = await connectToDatabase();
    const collection = db.collection('taxDefinitions')
    await collection.insertOne(newTax);
}