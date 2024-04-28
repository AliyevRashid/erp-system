import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/mydatabase';

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);
  const db = client.db();
  cachedDb = db;
  return db;
}

export async function insertInitialUsers() {
  const db = await connectToDatabase();
  const collection = db.collection('users');

  const users = [
    {
      id: 1,
      email: "john@example.com",
      name: "John Doe",
      password: "password1"
    },
    {
      id: 2,
      email: "alice@example.com",
      name: "Alice Smith",
      password: "password2"
    },
    {
      id: 3,
      email: "bob@example.com",
      name: "Bob Johnson",
      password: "password3"
    }
  ];

  await collection.insertMany(users);
}


export async function insertBudgetHistory() {
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('budget_history'); // Get the collection named 'budget_history'

  const budgetList= [
    { 
        id: 1, 
        budgetNo: "B001", 
        budgetDescription: "Budget for Q1", 
        budgettedAmount: 5000, 
        actualAmount: 4800, 
        variance: -200, 
        date: "2024-01-15", 
        isPositive: false 
    },
    { 
        id: 2, 
        budgetNo: "B002", 
        budgetDescription: "Budget for Q2", 
        budgettedAmount: 6000, 
        actualAmount: 6500, 
        variance: 500, 
        date: "2024-04-10", 
        isPositive: true 
    },
    { 
        id: 3, 
        budgetNo: "B003", 
        budgetDescription: "Budget for Q3", 
        budgettedAmount: 7000, 
        actualAmount: 7200, 
        variance: 200, 
        date: "2024-07-20", 
        isPositive: true 
    },
    { 
        id: 4, 
        budgetNo: "B004", 
        budgetDescription: "Budget for Q4", 
        budgettedAmount: 5500, 
        actualAmount: 5400, 
        variance: -100, 
        date: "2024-10-05", 
        isPositive: false 
    },
    { 
        id: 5, 
        budgetNo: "B005", 
        budgetDescription: "Budget for Year End", 
        budgettedAmount: 20000, 
        actualAmount: 18000, 
        variance: -2000, 
        date: "2024-12-31", 
        isPositive: false 
    },
    { 
        id: 6, 
        budgetNo: "B006", 
        budgetDescription: "Budget for Marketing Campaign", 
        budgettedAmount: 8000, 
        actualAmount: 8500, 
        variance: 500, 
        date: "2024-02-28", 
        isPositive: true 
    },
    { 
        id: 7, 
        budgetNo: "B007", 
        budgetDescription: "Budget for Product Development", 
        budgettedAmount: 10000, 
        actualAmount: 9800, 
        variance: -200, 
        date: "2024-05-15", 
        isPositive: false 
    },
    { 
        id: 8, 
        budgetNo: "B008", 
        budgetDescription: "Budget for Sales Promotion", 
        budgettedAmount: 7500, 
        actualAmount: 8000, 
        variance: 500, 
        date: "2024-08-20", 
        isPositive: true 
    },
    { 
        id: 9, 
        budgetNo: "B009", 
        budgetDescription: "Budget for Hiring New Staff", 
        budgettedAmount: 9000, 
        actualAmount: 9200, 
        variance: 200, 
        date: "2024-11-10", 
        isPositive: true 
    },
    { 
        id: 10, 
        budgetNo: "B010", 
        budgetDescription: "Budget for Office Renovation", 
        budgettedAmount: 12000, 
        actualAmount: 11800, 
        variance: -200, 
        date: "2024-03-05", 
        isPositive: false 
    },
    { 
        id: 11, 
        budgetNo: "B011", 
        budgetDescription: "Budget for Training Programs", 
        budgettedAmount: 3000, 
        actualAmount: 3200, 
        variance: 200, 
        date: "2024-06-25", 
        isPositive: true 
    },
    { 
        id: 12, 
        budgetNo: "B012", 
        budgetDescription: "Budget for IT Infrastructure", 
        budgettedAmount: 15000, 
        actualAmount: 15500, 
        variance: 500, 
        date: "2024-09-15", 
        isPositive: true 
    },
    { 
        id: 13, 
        budgetNo: "B013", 
        budgetDescription: "Budget for Legal Consultation", 
        budgettedAmount: 4000, 
        actualAmount: 3800, 
        variance: -200, 
        date: "2024-12-10", 
        isPositive: false 
    },
    { 
        id: 14, 
        budgetNo: "B014", 
        budgetDescription: "Budget for Research and Development", 
        budgettedAmount: 10000, 
        actualAmount: 9800, 
        variance: -200, 
        date: "2024-02-15", 
        isPositive: false 
    },
    { 
        id: 15, 
        budgetNo: "B015", 
        budgetDescription: "Budget for Inventory Management", 
        budgettedAmount: 8000, 
        actualAmount: 7500, 
        variance: -500, 
        date: "2024-05-30", 
        isPositive: false 
    }
  ];
  await collection.insertMany(budgetList);
}

export async function getAllBudgetHistory(){
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('budget_history'); // Get the collection named 'budget_history'
  const history = collection.find().toArray();
  return history;
}


export async function getAllSalaryDefinitions(){
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('salaryDefinitions'); // Get the collection named 'salaryDefinitions'
  const salaryDefinitions = collection.find().toArray();
  return salaryDefinitions;
}

export async function insertInitialSalaryDefinitions(){

  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('salaryDefinitions');
   
  const employeeData = [
    {
      id: 1,
      Title: "Manager",
      Level: "MD",
      BasicSalary: 5000,
      Allowance: 1000,
      GrossSalary: 6000,
      Deductions: 500,
      NetSalary: 5500
    },
    {
      id: 2,
      Title: "Supervisor",
      Level: "CEO",
      BasicSalary: 6000,
      Allowance: 1200,
      GrossSalary: 7200,
      Deductions: 600,
      NetSalary: 6600
    },
    {
      id: 3,
      Title: "Assistant Manager",
      Level: "GM",
      BasicSalary: 4500,
      Allowance: 800,
      GrossSalary: 5300,
      Deductions: 400,
      NetSalary: 4900
    },
    {
      id: 4,
      Title: "Team Lead",
      Level: "DGM",
      BasicSalary: 5500,
      Allowance: 900,
      GrossSalary: 6400,
      Deductions: 550,
      NetSalary: 5850
    },
    {
      id: 5,
      Title: "Senior Developer",
      Level: "ED",
      BasicSalary: 6500,
      Allowance: 1100,
      GrossSalary: 7600,
      Deductions: 700,
      NetSalary: 6900
    },
    {
      id: 6,
      Title: "Manager",
      Level: "MD",
      BasicSalary: 5000,
      Allowance: 1000,
      GrossSalary: 6000,
      Deductions: 500,
      NetSalary: 5500
    },
    {
      id: 7,
      Title: "Supervisor",
      Level: "CEO",
      BasicSalary: 6000,
      Allowance: 1200,
      GrossSalary: 7200,
      Deductions: 600,
      NetSalary: 6600
    },
    {
      id: 8,
      Title: "Assistant Manager",
      Level: "GM",
      BasicSalary: 4500,
      Allowance: 800,
      GrossSalary: 5300,
      Deductions: 400,
      NetSalary: 4900
    },
    {
      id: 9,
      Title: "Team Lead",
      Level: "DGM",
      BasicSalary: 5500,
      Allowance: 900,
      GrossSalary: 6400,
      Deductions: 550,
      NetSalary: 5850
    },
    {
      id: 10,
      Title: "Senior Developer",
      Level: "ED",
      BasicSalary: 6500,
      Allowance: 1100,
      GrossSalary: 7600,
      Deductions: 700,
      NetSalary: 6900
    },
    {
      id: 11,
      Title: "Manager",
      Level: "MD",
      BasicSalary: 5000,
      Allowance: 1000,
      GrossSalary: 6000,
      Deductions: 500,
      NetSalary: 5500
    },
    {
      id: 12,
      Title: "Supervisor",
      Level: "CEO",
      BasicSalary: 6000,
      Allowance: 1200,
      GrossSalary: 7200,
      Deductions: 600,
      NetSalary: 6600
    },
    {
      id: 13,
      Title: "Assistant Manager",
      Level: "GM",
      BasicSalary: 4500,
      Allowance: 800,
      GrossSalary: 5300,
      Deductions: 400,
      NetSalary: 4900
    },
    {
      id: 14,
      Title: "Team Lead",
      Level: "DGM",
      BasicSalary: 5500,
      Allowance: 900,
      GrossSalary: 6400,
      Deductions: 550,
      NetSalary: 5850
    },
    {
      id: 15,
      Title: "Senior Developer",
      Level: "ED",
      BasicSalary: 6500,
      Allowance: 1100,
      GrossSalary: 7600,
      Deductions: 700,
      NetSalary: 6900
    }
  ];
   
  await collection.insertMany(employeeData);
}

export async function getAllTaxDefinitions(){
  
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('taxDefinitions'); // Get the collection named 'taxDefinitions'
  const taxDefinitions = collection.find().toArray();
  return taxDefinitions;
}

export async function insertInitialTaxDefinitions(){
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('taxDefinitions'); // Get the collection named 'taxDefinitions'
  const data =[
    { id: 1, taxtype: "Income Tax", value: 10 },
    { id: 2, taxtype: "Sales Tax", value: 5 },
    { id: 3, taxtype: "Property Tax", value: 8 },
    { id: 4, taxtype: "Corporate Tax", value: 12 },
    { id: 5, taxtype: "Excise Tax", value: 6 },
    { id: 6, taxtype: "Customs Duty", value: 7 }
  ]
  await collection.insertMany(data);
}

export async function getAllPayroll(){
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('payroll'); // Get the collection named 'payroll'
  const payrollDefinitions = collection.find().toArray();
  return payrollDefinitions;
}

export async function insertInitialPayroll(){
  const db = await connectToDatabase(); // Connect to the database
  const collection = db.collection('payroll'); // Get the collection named 'payroll'
  const data =[
      {
          id: 1,
          PaymentName: "Salary",
          Designation: "Software Engineer",
          DateGenerated: "2024-04-01",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Paid"
      },
      {
          id: 2,
          PaymentName: "Bonus",
          Designation: "Data Scientist",
          DateGenerated: "2024-04-05",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      },
      {
          id: 3,
          PaymentName: "Overtime",
          Designation: "Marketing Manager",
          DateGenerated: "2024-04-10",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      },
      {
          id: 4,
          PaymentName: "Allowance",
          Designation: "HR Specialist",
          DateGenerated: "2024-04-15",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Paid"
      },
      {
          id: 5,
          PaymentName: "Commission",
          Designation: "Financial Analyst",
          DateGenerated: "2024-04-20",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      },
      {
          id: 6,
          PaymentName: "Incentive",
          Designation: "Product Manager",
          DateGenerated: "2024-04-25",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Paid"
      },
      {
          id: 7,
          PaymentName: "Bonus",
          Designation: "UX Designer",
          DateGenerated: "2024-04-05",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      },
      {
          id: 8,
          PaymentName: "Overtime",
          Designation: "Customer Success Manager",
          DateGenerated: "2024-04-10",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      },
      {
          id: 9,
          PaymentName: "Allowance",
          Designation: "Operations Coordinator",
          DateGenerated: "2024-04-15",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Paid"
      },
      {
          id: 10,
          PaymentName: "Commission",
          Designation: "Content Writer",
          DateGenerated: "2024-04-20",
          PaymentMonth: "April",
          PaymentYear: "2024",
          Status: "Pending"
      }
  ]

  await collection.insertMany(data);
}

export async function insertInitialPaylips(){
  const staffData = [
    {
        id: 1,
        StaffName: "John Doe",
        Title: "Software Engineer",
        Level: "Senior",
        BasicSalary: "$80,000",
        Allowances: "$5,000",
        GrossSalary: "$85,000",
        Deduction: "$10,000",
        NetSalary: "$75,000"
    },
    {
        id: 2,
        StaffName: "Alice Smith",
        Title: "Data Scientist",
        Level: "Lead",
        BasicSalary: "$90,000",
        Allowances: "$6,000",
        GrossSalary: "$96,000",
        Deduction: "$12,000",
        NetSalary: "$84,000"
    },
    {
        id: 3,
        StaffName: "Bob Johnson",
        Title: "Marketing Manager",
        Level: "Manager",
        BasicSalary: "$100,000",
        Allowances: "$7,000",
        GrossSalary: "$107,000",
        Deduction: "$15,000",
        NetSalary: "$92,000"
    },
    {
        id: 4,
        StaffName: "Emily Davis",
        Title: "HR Specialist",
        Level: "Associate",
        BasicSalary: "$70,000",
        Allowances: "$4,000",
        GrossSalary: "$74,000",
        Deduction: "$8,000",
        NetSalary: "$66,000"
    },
    {
        id: 5,
        StaffName: "Michael Wilson",
        Title: "Financial Analyst",
        Level: "Junior",
        BasicSalary: "$60,000",
        Allowances: "$3,000",
        GrossSalary: "$63,000",
        Deduction: "$7,000",
        NetSalary: "$56,000"
    },
    {
        id: 6,
        StaffName: "Sarah Brown",
        Title: "Product Manager",
        Level: "Senior",
        BasicSalary: "$95,000",
        Allowances: "$6,500",
        GrossSalary: "$101,500",
        Deduction: "$11,000",
        NetSalary: "$90,500"
    },
    {
        id: 7,
        StaffName: "David Lee",
        Title: "UX Designer",
        Level: "Lead",
        BasicSalary: "$85,000",
        Allowances: "$5,500",
        GrossSalary: "$90,500",
        Deduction: "$9,500",
        NetSalary: "$81,000"
    },
    {
        id: 8,
        StaffName: "Emma Martinez",
        Title: "Customer Success Manager",
        Level: "Manager",
        BasicSalary: "$105,000",
        Allowances: "$7,500",
        GrossSalary: "$112,500",
        Deduction: "$13,000",
        NetSalary: "$99,500"
    },
    {
        id: 9,
        StaffName: "James Taylor",
        Title: "Operations Coordinator",
        Level: "Associate",
        BasicSalary: "$75,000",
        Allowances: "$4,500",
        GrossSalary: "$79,500",
        Deduction: "$8,500",
        NetSalary: "$71,000"
    },
    {
        id: 10,
        StaffName: "Olivia Anderson",
        Title: "Content Writer",
        Level: "Junior",
        BasicSalary: "$55,000",
        Allowances: "$3,500",
        GrossSalary: "$58,500",
        Deduction: "$6,000",
        NetSalary: "$52,500"
    }
];
 const db = await connectToDatabase(); // Connect to the database
 const collection = db.collection('payLips'); // Get the collection named 'paylips'
 await collection.insertMany(staffData);
}

export async function getAllPaylips(){
  const db = await connectToDatabase();
  const collection =db.collection('payLips')
  const payLips = collection.find().toArray();
  return payLips;
}