'use client'
import TotalInfo from "../../../app/components/TotalInfo";
import Layout from "../../../app/components/Layout"
import style from "../../../styles/dashboard.module.css"
import {memoList,staffList,paymentVouchers} from "@/lib/data"

export default function DashBoard(){

    const approved = countByStatus("Approved");
    const rejected = countByStatus("Rejected");
    const pending = countByStatus("Pending");
    return(
        <Layout>
            <div><h3>Welcome Name Surname</h3></div>
            <div className={style.TotalInfoContainer}>
               
                <TotalInfo number="250" description="Total number of staff" url="https://st2.depositphotos.com/5266903/11824/v/450/depositphotos_118246648-stock-illustration-staff-flat-vector-icon.jpg"/>
                <TotalInfo number="100" description="Total applications" url="https://banner2.cleanpng.com/20181107/liz/kisspng-computer-icons-document-clip-art-portable-network-documents-dodgerblue-icon-5be31628683a58.7643782215416090004269.jpg"/>
                <TotalInfo number="10" description="Total number projects" url="https://cdn-icons-png.flaticon.com/512/6804/6804427.png"/>
                <TotalInfo number="10" description="Total number departaments" url="https://cdn-icons-png.flaticon.com/512/8071/8071210.png"/>
            </div>
            <div className={style.mainContainer}>
                <div className={style.MemoContainer}>
                    <h3>Memo</h3>
                    <div className={style.MemoList}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={style.tableData}><h4>S/N</h4></th>
                                    <th className={style.tableData}><h4>Memo Title</h4></th>
                                    <th className={style.tableData}><h4>Sent From</h4></th>
                                    <th className={style.tableData}><h4>Sent To</h4></th>
                                    <th className={style.tableData}><h4>Status</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                             {memoList.map((memo)=>(
                                 <tr key={memo.id}>
                                 <td className={style.tableData}>{memo.id}</td>
                                 <td className={style.tableData}>{memo.title}</td>
                                 <td className={style.tableData}>{memo.sender}</td>
                                 <td className={style.tableData}>{memo.receiver}</td>
                                 <td className={style.tableData}>{memo.status}</td>
                               </tr>
                             ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.StaffListContainer}>
                    <h3>Staff List</h3>
                    <div className={style.StaffList}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={style.tableData}>S/N</th>
                                    <th className={style.tableData}>Staff Name</th>
                                    <th className={style.tableData}>Staff Role</th>
                                    <th className={style.tableData}>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                             {staffList.map((staff)=>(
                                <tr key={staff.id}>
                                 <td className={style.tableData}>{staff.id}</td>
                                 <td className={style.tableData}>{staff.name}</td>
                                 <td className={style.tableData}>{staff.role}</td>
                                 <td className={style.tableData}>{staff.designation}</td>
                                </tr>
                             ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={style.mainContainer}>
                <div className={style.PaymentVouchersContainer}>
                    <h3>Payment Vouchers</h3>
                    <div className={style.PaymentVouchersList}>
                    <table>
                            <thead>
                                <tr>
                                    <th className={style.tableData}>S/N</th>
                                    <th className={style.tableData}>subject</th>
                                    <th className={style.tableData}>Date</th>
                                    <th className={style.tableData}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                             {paymentVouchers.map((paymentVouchers)=>(
                                <tr key={paymentVouchers.id}>
                                 <td className={style.tableData}>{paymentVouchers.id}</td>
                                 <td className={style.tableData}>{paymentVouchers.subject}</td>
                                 <td className={style.tableData}>{paymentVouchers.date}</td>
                                 <td className={style.tableData}>{paymentVouchers.status}</td>
                                </tr>
                             ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3>Staff Application Card</h3>
                    <div style={{display:"flex"}}>
                        <div style={{width:'10px',background:'green',margin:'5px',borderRadius:'10px'}}></div>
                        <p>Approved -{approved}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{width:'10px',background:'red',margin:'5px',borderRadius:'10px'}}></div>
                        <p>Rejected -{rejected}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{width:'10px',background:'orange',margin:'5px',borderRadius:'10px'}}></div>
                        <p>Pending -{pending}</p>
                    </div>
                   
                </div>
            </div>
        </Layout>
    )
}



const countByStatus=(status : string)=>{
    return memoList.filter(m => m.status == status).length;
}